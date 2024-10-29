window.addEventListener("DOMContentLoaded", () => {
    let  canvas1 = document.querySelector("#canvas1");
    let context1 = canvas1.getContext("2d");
    context1.fillStyle = "red";
    context1.fillRect(10, 10, 100, 100); // dibujar cuadrado rojo 
    context1.fillStyle = "green";  // dibuja un triangulo verde 
context1.beginPath();
context1.moveTo(200, 20);
context1.lineTo(250, 80);
context1.lineTo(150, 80);
context1.closePath();
context1.fill();

context1.fillStyle="blue" // Dibujando un circulo 
context1.beginPath();
context1.arc(300,65,45,0,Math.PI*2);
context1.fill();

context1.fillStyle="purple";
context1.beginPath();
context1.fillRect(500,40,80,140);
context1.fill();

context1.fillStyle = "yellow";
context1.beginPath();
let  centerX = 410;
let  centerY = 80;  
let  radius = 60;   
for (let i = 0; i < 8; i++) {
    let angle = (i * 2 * Math.PI) / 8 - Math.PI / 2; 
    let  x = centerX + radius * Math.cos(angle);
    let  y = centerY + radius * Math.sin(angle);
    if (i === 0) {
        context1.moveTo(x, y);
    } else {
        context1.lineTo(x, y);
    }
}
context1.closePath();
context1.fill();
// segunda figura 
let canvas2=document.querySelector("#canvas2");
let context2 = canvas2.getContext("2d");
context2.fillStyle="yellow" // Dibujando un circulo 
context2.arc(100,100,80,0,Math.PI*2);
context2.fill();

context2.fillStyle = "green"; // Color de los ojos
context2.strokeStyle = "red"; // Color de la boca
    context2.lineWidth = 5; 
    context2.beginPath();
    context2.arc(100, 100, 40, 0, Math.PI); // Círculo para la boca
    context2.stroke();
    context2.beginPath();
    context2.fillRect(60,60,20,20);
    context2.fill();
    context2.beginPath();
    context2.fillRect(120,60,20,20);
    context2.fill();
context2.fillStyle = "red";
context2.beginPath();
context2.rect(60, 160, 90, 20); // Rectángulo horizontal para la bufanda
context2.fill();

// Lazos de la bufanda
context2.beginPath();
context2.rect(65, 180, 20, 40); // Lazo izquierdo de la bufanda
context2.rect(95, 180, 20, 40); // Lazo derecho de la bufanda
context2.fill();
context2.beginPath();
context2.moveTo(60, 170);
context2.lineTo(140, 170); // Línea en la parte superior de la bufanda
context2.moveTo(75, 190);
context2.lineTo(75, 220); // Pliegue en el lazo izquierdo
context2.moveTo(105, 190);
context2.lineTo(105, 220); // Pliegue en el lazo derecho
context2.strokeStyle = " orange";
context2.lineWidth = 2;
context2.stroke();
// Parte circular superior del gorro
context2.fillStyle = "blue";
context2.beginPath();
context2.arc(100,10,30,0,Math.PI*2);
context2.fill();

context2.fillStyle = "blue";
context2.beginPath();
context2.rect(100, 20, 60, 20); // Rectángulo para la base del gorro
context2.fill();

let image = new Image();
image.src = "foto.jpg";
let canvas = document.querySelector("#canvas3");
let context = canvas.getContext("2d");

let canvasSizeX = 400;
let canvasSizeY = 400;
let speed = 30;

let scale = 1.05;

let y = -4.5;
let x = 0;

let dx = 1;
let dy = 1;

let imageW, imageH, clearX, clearY;

image.onload = () => {

  imageW = image.width * scale;
  imageH = image.height * scale;

  if (imageW > canvasSizeX) {
    x = canvasSizeX - imageW;
  }

  if (imageH > canvasSizeX) {
    clearX = imageW;
  } else {
    clearX = canvasSizeX;
  }

  if (imageH > canvasSizeY) {
    clearY = imageH;
  } else {
    clearY = canvasSizeY;
  }

  return setInterval(draw, speed);
};

function draw() {
  context.clearRect(0, 0, clearX, clearY);

  if (imageH <= canvasSizeX) {
    if (x > canvasSizeX) {
      x = 0;
    }

    if (x > (canvasSizeX - imageW)) {
      context.drawImage(image, x-canvasSizeX+1, y, imageW, imageH);
    }
  } else {
    if (x > (canvasSizeX)) {
      x = canvasSizeX - imageW;
    }

    if (x > (canvasSizeX - imageW)) {
      context.drawImage(image, x-imageW+1, y, imageW, imageH);
    }
  }

  if (imageH <= canvasSizeY) {
    if (y > canvasSizeY) {
      y = 0;
    }

    if (y > (canvasSizeY - imageH)) {
      context.drawImage(image, x, y-canvasSizeY+1, imageW, imageH);
    }
  } else {
    if (y > (canvasSizeY)) {
      y = canvasSizeY - imageH;
    }

    if (y > (canvasSizeY - imageH)) {
      context.drawImage(image, x, y-imageH+1, imageW, imageH);
    }
  }

  context.drawImage(image, x, y, imageW, imageH);
  x += dx;
  y += dy;
}

});