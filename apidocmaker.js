const jsdoc2md = require("jsdoc-to-markdown");

function removeLineBetween(lines, startregex, endregex, longest=false)
{
    let newlines = [];

    if(longest){
        const indices1 = lines.map(l=>l.match(startregex));
        const indices2 = lines.map(l=>l.match(endregex));
        let firstIdx = indices1.findIndex(e=>e);
        let lastIdx =  indices2.reverse().findIndex(e=>e);
        if(lastIdx >= 0) lastIdx = indices2.length - lastIdx - 1;
        /*console.log(indices1);
        console.log(indices2);*/
        //console.log(firstIdx);
        //console.log(lastIdx);
        if(firstIdx>=0 && lastIdx>=0 && firstIdx != lastIdx){
            lines.forEach((l,idx)=>{
                if(idx < firstIdx || idx >= lastIdx)
                    newlines.push(l);
            });
        }else{
            newlines = lines;
        }
    }else{
        let in_it = false;
        lines.forEach(l=>{
            if((!in_it) && l.match(startregex)){
                in_it = true;
            }else if(in_it && l.match(endregex)){
                in_it = false;
            }
            if(!in_it){
                newlines.push(l);
            }
        });
    }
    return newlines;
}

function sub(lines, regex, replstr)
{
    let newlines = [];
    lines.forEach(l=>{
        if(l.match(regex)){
            l = l.replace(regex, replstr);
        }
        newlines.push(l);
    });
    return newlines;
}

function repl(md){
    let mdl = md.split("\n");
    mdl = removeLineBetween(mdl, 
        "## Modules", 
        "<a name=\"module_Fumen\"></a>", true);
    
    mdl = sub(mdl, "exports.", "");

    md = mdl.join("\n");

    console.log(md);
}

jsdoc2md.render({ files: "src/**/*.js" }).then((md)=>{
    if(process.argv.length >= 3 && process.argv[2]=="raw"){
        console.log(md);
    }else{
        repl(md);
    }
});

