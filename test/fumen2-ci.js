const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

let main = (async(addr, fumenfile) => {
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
        outpath = path.join(outpath,`${tcname}.${i}.png`);
        console.log("Capturing to "+outpath);
        await page.screenshot({ clip: clips[i], path: outpath});
        await page.waitFor(1000);
    }
	//await page.screenshot({path: "screenshot.png", fullPage:true});
	await browser.close();
});

const addr = process.argv[2];
console.log(addr);
main(addr, "case1.fumen");

