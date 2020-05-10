const jsdoc2md = require("jsdoc-to-markdown");

function removeLineBetween(lines, startregex, endregex, start_min_occur=0)
{
    let newlines = [];
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
    return newlines;
}

function repl(md){
    // Remove modules
    let reconst_md = "";

    mdl = md.split("\n");
    mdl = removeLineBetween(mdl, 
        "<a name=\"module_Fumen\"></a>", 
        "<a name=\"module_Fumen\"></a>"); // First one is removed
    mdl = removeLineBetween(mdl, 
        "## Modules", 
        "<a name=\"module_Fumen\"></a>");

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

