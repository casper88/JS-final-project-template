var bg=document.createElement("img");
bg.src="images/map.png";
var canvas=document.getElementById("game-canvas");
var ctx = canvas.getContext("2d")
function draw(){
  ctx.drawImage(bgImg,0,0);
}
draw()
setTimeout(draw,1000)
