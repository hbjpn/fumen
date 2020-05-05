document.addEventListener("DOMContentLoaded", function() {
    // Search all the fumen code block and render it in canvas
    let fl = document.getElementsByClassName("fumencode");
    console.log(fl);
    for(let i = 0; i < fl.length; ++i){
        draw(fl[i]);
        fl[i].oninput = ()=>{ draw(fl[i]); };
    }
});

function draw(textarea){
    var code = textarea.value;
    var parser = new Fumen.Parser();
    var track = parser.parse(code);
    if(!track){
      return;
    }

    var score_area = textarea.nextElementSibling; 
    while (score_area.firstChild) {
      score_area.removeChild(score_area.firstChild);
    }
    let canvas = document.createElement("canvas");
    score_area.appendChild(canvas);

    var renderer = new Fumen.DefaultRenderer(canvas, {paper_width:380, paper_height:0});
    renderer.render(track)
    .then(function(r){
        textarea.style.height = r.height + "px";
    });
}