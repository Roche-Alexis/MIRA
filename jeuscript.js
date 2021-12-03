var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* //EXEMPLE
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
*/
ctx.beginPath();
ctx.arc(10, 10, 20, 0, Math.PI*2, false);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

let x = 100;
let y = 50;
var ballRadius = 10;
var isMouseDown = false;


function drawCercle() {
    // le code pour dessiner
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.closePath();
}

function draw() {
    // efface le cadre (refraichissement)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCercle();
    x += 10;
    y += 10;
  }

  //setInterval(draw, 50);