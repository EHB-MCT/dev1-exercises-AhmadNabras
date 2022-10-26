"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;


/*Margint aan rechter en linkerkant van de lijn*/
let margin = 50;
let spacing = 50;

/*functie om lines te tekenen*/
drawLines();

    function drawLines() {
    
    context.lineWidth = 7;
    context.beginPath();
    context.moveTo(margin, 50);
    context.lineTo(width - margin, 50);
    context.lineTo(50, 150);
    context.lineTo(width - margin, 150);
    context.lineTo(50, 250);
    context.lineTo(width - margin, 250);
    context.lineTo(50, 350);
    context.lineTo(width - margin, 350);
    context.lineTo(50, 450);
    context.lineTo(width - margin, 450);
    context.lineTo(49, 48);
    context.stroke();
    


    }


