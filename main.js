var bg=document.createElement("img");
bg.src="images/map.png";
var ani=document.createElement("img");
ani.src="image/slime.gif"
var canvas=document.getElementById("game_canvas");
var ctx = canvas.getContext("2d")
function draw(){
  ctx.drawImage(bg,0,0);
  ctx.drawImage(ani,0,0);
}

setTimeout(draw,1000)

