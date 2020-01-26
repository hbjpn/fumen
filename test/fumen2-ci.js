const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const execSync = require('child_process').execSync;

let getHeadCommit = () => {
    let command="git log  --pretty=format:\"%h %cd\" -1 --date=iso";
    let result =  execSync(command).toString();
    let firstSpaceIdx = result.indexOf(" ");
    let headCommit = result.substring(0, firstSpaceIdx);
    let commitTimeStr = result.substring(firstSpaceIdx+1); // ISO
    var commitTime = new Date(commitTimeStr);
    return {commit:headCommit, time:commitTime};
};

let takediff = (img1path, img2path, diffpath) => {
    const img1 = PNG.sync.read(fs.readFileSync(img1path));
    const img2 = PNG.sync.read(fs.readFileSync(img2path));
    const {width, height} = img1;
    const diff = new PNG({width, height});

    pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

    fs.writeFileSync(diffpath, PNG.sync.write(diff));
};

let main = (async(addr, fumenfile, headInfo) => {
	let tcname = path.parse(fumenfile).name;
	let code = fs.readFileSync(fumenfile,"utf-8");
	console.log(code);
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(addr); //"http://192.168.11.5:5000");
	await page.setViewport({
        width: 1440,
        height: 10000 // set whatever you want
	});
	await page.evaluate( () => document.getElementById("code").value = "");
	await page.type("#code",code); // Emulating key press rather than DOM manupilation
	await page.click("button");
	await page.waitFor(1000);
	const clips = await page.evaluate(s => {
        const els = document.querySelectorAll(s);
        let cliprects = [];
        els.forEach( el => {
            const { width, height, top: y, left: x } = el.getBoundingClientRect();
            cliprects.push({ width, height, x, y });
        });
        return cliprects;
    }, "canvas");

    console.log(clips);
    console.log(clips.length);
    await page.waitFor(1000);
    for(let i = 0; i < clips.length; ++i){
        console.log(clips[i]);
        let outpath = path.join(path.dirname(fumenfile),"screenshot");
        let datems = headInfo.time.getTime();
        outpath = path.join(outpath,`${tcname}.${i}.${datems}.${headInfo.commit}.png`);
        console.log("Capturing to "+outpath);
        await page.screenshot({ clip: clips[i], path: outpath});
    }
	//await page.screenshot({path: "screenshot.png", fullPage:true});
	await browser.close();
});


let gitpull = execSync("git pull").toString();
console.log(gitpull);
let build = execSync("npm run build").toString();
console.log(build);
let headInfo = getHeadCommit();

if(false){
const addr = process.argv[2];
console.log(addr);
main(addr, "case1.fumen", headInfo);
main(addr,"case2.fumen", headInfo);
main(addr,"flex_reharsal_group.fumen", headInfo);
}