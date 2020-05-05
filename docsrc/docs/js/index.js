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

    textarea.style.height = "";
    textarea.style.height = textarea.scrollHeight + 0 + "px";
    
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

    let w = score_area.clientWidth;

    var renderer = new Fumen.DefaultRenderer(canvas, {
      paper_width:Math.min(380,w*0.9),
      paper_height:0,
      text_size: Math.min(1, (w*0.9)/380)
    });
    renderer.render(track);
}