var bg=document.createElement("img");
bg.src="images/map.png";
var aniImg=document.createElement("img");
aniImg.src="image/slime.gif";
var ani={
  x:0,
  y:0
};
var canvas=document.getElementById("game_canvas");
var ctx = canvas.getContext("2d")
function draw(){
  ctx.drawImage(bg,0,0);
  ctx.drawImage(aniImg,0,0);
}

setTimeout(draw,1000)

