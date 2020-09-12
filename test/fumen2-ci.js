const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
const execSync = require("child_process").execSync;
const {argv} = require("yargs");

const FIRST_SC = -3;
const SIZE_DIFF = -2;
const NO_UPDATE = -1;

let getHeadCommit = () => {
    let command="git log  --pretty=format:\"%h %cd\" -1 --date=iso";
    let result =  execSync(command).toString();
    let firstSpaceIdx = result.indexOf(" ");
    let headCommit = result.substring(0, firstSpaceIdx);
    let commitTimeStr = result.substring(firstSpaceIdx+1); // ISO
    var commitTime = new Date(commitTimeStr);
    return {commit:headCommit, time:commitTime};
};

let listScreenShortsForCommit = (dir, tcname)=>{
    var fileList = [];
    var files = fs.readdirSync(dir);
    let re = new RegExp("("+tcname+")\\.(\\d+)\\.(.*)\\.png");

    for(var i = 0; i < files.length; ++i){
        var file = files[i];
        let fullpath = path.join(dir, file);
        let m = file.match(re);
        if(fs.statSync(fullpath).isFile() && m){
            fileList.push({file:file,time:parseInt(m[2]),commit:m[3]});
        }
    }
    return fileList;
};

let takediff = (img1path, img2path, diffpath) => {
    const img1 = PNG.sync.read(fs.readFileSync(img1path));
    const img2 = PNG.sync.read(fs.readFileSync(img2path));

    if(img1.width == img2.width && img1.height == img2.height){
        const width = img1.width;
        const height = img1.height;
        const diff = new PNG({width,height});

        let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

        fs.writeFileSync(diffpath, PNG.sync.write(diff));

        return numDiffPixels;
    }else{
        return SIZE_DIFF;
    }
};

let capture = (async(addr, fumenfile, headInfo, base_commit) => {
	let tcname = path.parse(fumenfile).name;
	let code = fs.readFileSync(fumenfile,"utf-8");
    //console.log(code);
    let param = {
        "paper_width":400,
        "paper_height":600
    };

    let options = {
        ignoreDefaultArgs: ["--disable-extensions"], 
        defaultViewport: null,
        args: ["--no-sandbox"],
        // executablePath: "./node_modules/puppeteer/.local-chromium/linux-706915/chrome-linux/chrome", // Does not work
        executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    };

	const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    let finalurl = addr+"/view.html?code="+encodeURIComponent(code)+"&param="+encodeURIComponent(JSON.stringify(param));
    console.log("Full URL:"+finalurl);
	await page.goto(finalurl); //"http://192.168.11.5:5000");
	await page.setViewport({
        width: 1440,
        height: 10000 // set whatever you want
	});

	await page.waitFor(1000);
	const clips = await page.evaluate(s => {
        const els = document.querySelectorAll(s);
        let cliprects = [];
        els.forEach( el => {
            const { width, height, top: y, left: x } = el.getBoundingClientRect();
            cliprects.push({ width, height, x, y });
        });
        return cliprects;
    }, "#scores_area");

    //console.log(clips);
    //console.log(clips.length);
    await page.waitFor(1000);
     
    // Take diff from the previous image
    
    let scdirname = "screenshot";
    if (!fs.existsSync(scdirname)){
        fs.mkdirSync(scdirname);
    }
    
    let scs = listScreenShortsForCommit(scdirname,tcname);
    scs.filter((v,i)=>i>scs.length-10).forEach(s=>console.log(s.file));
    let prev_sc_file = null;
    if(base_commit){
        prev_sc_file = scs.find(e=>e.commit == base_commit) || null;
        if(prev_sc_file) console.log(`Base commit set to ${base_commit}`);
        else console.log(`Base commmi ${base_commit} is not found. Set to head ommit`);
    }
    if(prev_sc_file == null && scs.length >= 1){
        prev_sc_file = scs[scs.length-1];
    }

    let datems = headInfo.time.getTime();
    let pngname = `${tcname}.${datems}.${headInfo.commit}.png`;
    console.log(`head.commit=${headInfo.commit}, .time=${headInfo.time.getTime()}`);

    let numDiffPixels = 0;
    if(prev_sc_file && prev_sc_file.file == pngname){
        // Not yet comitted. In that case, the image is generated with the name indicating it is workingcopy
        console.log("No commit after last commit. PNG generated with suffix workingcopy.");
        pngname = `${tcname}.workingcopy.${headInfo.commit}.png`;
    }

    //console.log(clips[0]);
    let scdir = path.join(path.dirname(fumenfile),scdirname);
    //outpath = path.join(outpath,`${tcname}.${i}.${datems}.${headInfo.commit}.png`);
    let head_full_path = path.join(scdir,pngname);
    console.log("Capturing to "+head_full_path);
    await page.screenshot({ clip: clips[0], path: head_full_path});

    let prev_full_path = "";
    let diff_full_path = "";
    // Generate diff file if prev file is identified
    if(prev_sc_file){
        console.log(`Taking diff between ${prev_sc_file.file} and ${pngname} for ${tcname}`);
        prev_full_path = path.join(scdir, prev_sc_file.file);
        diff_full_path = path.join(scdir, `${tcname}.diff.${headInfo.commit}-${prev_sc_file.commit}.png`);
        numDiffPixels = takediff(head_full_path, prev_full_path, diff_full_path);
    }else{
        console.log(`This is the first screenshot for ${tcname}`);
        numDiffPixels = FIRST_SC;
    }

    await browser.close();
    
    return {numDiffPixels:numDiffPixels, head_full_path:head_full_path, prev_full_path:prev_full_path, diff_full_path:diff_full_path};
});

let imgtag = function(src){
    return "<img src=\""+src+"\"/>";
};
let tablerowtag = function(cols){
    let html="<tr>";
    for(let i=0; i<cols.length; ++i){
        html += "<td>"+cols[i]+"</td>";
    }
    html += "</tr>";
    return html;
};

let report_html = "<html><head><style>img { width:250px; } td{border: solid 1px gray; } table{border-collapse: collapse; }</style><title>CI</title><head><body>";
report_html += "<table>";

let dotest = async (headInfo)=>{
    const addr = argv._[0];
    console.log(addr);
    const base_commit = argv.c; // -c option for speicyf base commit
    const files = [
        "case1.fumen",
        "case2.fumen",
        "flex_reharsal_group.fumen",
        "generic1.fumen",
        "per_row_config.fumen",
        "on_bass.fumen",
        "zoom.fumen",
        "align.fumen"];
    const results = [];
    for(let i=0; i<files.length; ++i){
        let r = await capture(addr,files[i], headInfo, base_commit);
        results.push(r.numDiffPixels);
        report_html += tablerowtag([
            files[i], r.numDiffPixels,
            imgtag(r.head_full_path), imgtag(r.prev_full_path), imgtag(r.diff_full_path)]
        );
    }
    report_html += "</body>";
    fs.writeFile("report.html", report_html, (err) => {
        if (err) throw err;
        console.log("Report generated");
    });
    
    for(let i=0; i<files.length; ++i){
        console.log(files[i]+ " : " + results[i]);
    }
};

if(argv.p){ // -p option for git pull
    let gitpull = execSync("git pull").toString();
    console.log(gitpull);
}
if(argv.b){ // -b option for build
    let build = execSync("npm run build").toString();
    console.log(build);
}

let headInfo = getHeadCommit();

dotest(headInfo);
