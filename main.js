canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(300, 500, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(350, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(450, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(300, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 250, 50, 0, 2 * Math.PI);
ctx.stroke();