var canvas = document.getElementById("canvas");
let coor = document.getElementById("coor");

canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);

var draw = canvas.getContext("2d");

canvas.addEventListener("mousemove", (e) => {
  coor.innerText = `Client X/Y: ${e.offsetX}, ${e.offsetY}
  Client W/H: ${canvas.height}, ${canvas.width}`;

  draw.fillStyle = "red";
  draw.lineTo(e.offsetX, e.offsetY);
  draw.stroke();
});
