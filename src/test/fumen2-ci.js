const puppeteer = require('puppeteer');

(async() => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("http://192.168.11.5:5000");
	await page.setViewport({
        width: 1440,
        height: 10000 // set whatever you want
	});
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
        await page.screenshot({ clip: clips[i], path: `canvas${i}.png`});
        await page.waitFor(1000);
    }
	await page.screenshot({path: "screenshot.png", fullPage:true});
	await browser.close();
})();
