"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

   
drawRect(50, 50, 400);
drawRect(50, 50, 400);
drawRect(50, 50, 400);
drawRect(50, 50, 400);


function drawRect(x, y, size) {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    context.fillStyle = color;
    context.fillRect(x, y, size, size);
}