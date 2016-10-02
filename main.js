var bg=document.createElement("img");
bg.src="images/map.png";
var aniImg=document.createElement("img");
aniImg.src="images/slime.gif";
var towerbtn=document.createElement("img");
towerbtn.src="images/tower-btn.png";
var ani={
  x:0,
  y:0
};
var canvas=document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bg,1,1);
  ctx.drawImage(towerbtn,640,480,100,100);
 
  
}

setInterval(draw,1000);

