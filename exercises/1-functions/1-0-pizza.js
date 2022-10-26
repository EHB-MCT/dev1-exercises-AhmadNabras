"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");



drawCircle(400, 500, "red", 25);


function drawCircle(x, y, color) {
    context.fillStyle = color;
    context.beginPath();
    context.ellipse(x, y, size, size, 0, 0, Math.PI * 2);
}