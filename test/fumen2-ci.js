const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const execSync = require('child_process').execSync;

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


let capture = (async(addr, fumenfile, headInfo) => {
	let tcname = path.parse(fumenfile).name;
	let code = fs.readFileSync(fumenfile,"utf-8");
    //console.log(code);
    let param = {
        "paper_width":400,
        "paper_height":600
    };

    let options = {
        ignoreDefaultArgs: ['--disable-extensions'], 
        defaultViewport: null,
        args: ['--no-sandbox'],
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
    let prev_sc_file = null;
    if(scs.length >= 1){
        prev_sc_file = scs[scs.length-1];
    }

    let datems = headInfo.time.getTime();
    let pngname = `${tcname}.${datems}.${headInfo.commit}.png`;

    let numDiffPixels = 0;
    if(prev_sc_file && prev_sc_file.file == pngname){
        // Not yet comitted. In that case, the image is generated with the name indicating it is workingcopy
        pngname = `${tcname}.workingcopy.${headInfo.commit}.png`;
    }

    console.log(clips[0]);
    let scdir = path.join(path.dirname(fumenfile),scdirname);
    //outpath = path.join(outpath,`${tcname}.${i}.${datems}.${headInfo.commit}.png`);
    let full_path = path.join(scdir,pngname);
    console.log("Capturing to "+full_path);
    await page.screenshot({ clip: clips[0], path: full_path});

    // Generate diff file if prev file is identified
    if(prev_sc_file){
        let prev_full_path = path.join(scdir, prev_sc_file.file);
        let diff_full_path = path.join(scdir, `${tcname}.diff.${headInfo.commit}-${prev_sc_file.commit}.png`);
        numDiffPixels = takediff(full_path, prev_full_path, diff_full_path);
    }else{
        numDiffPixels = FIRST_SC;
    }

    await browser.close();
    
    return numDiffPixels;
});

let dotest = async (headInfo)=>{
    const addr = process.argv[2];
    console.log(addr);
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
        let numDiffPixels = await capture(addr,files[i], headInfo);
        results.push(numDiffPixels);
    }
    
    for(let i=0; i<files.length; ++i){
        console.log(files[i]+ " : " + results[i]);
    }
};


let gitpull = execSync("git pull").toString();
console.log(gitpull);
let build = execSync("npm run build").toString();
console.log(build);
let headInfo = getHeadCommit();

dotest(headInfo);
