"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let horizontallines = 60;
let verticallines = 30;

let width = 600;
let height = 300;



draw();

//draw background box in orange with white lines. 
//box size: x0, y0, h300, w600. 
//Line thickness is 2. 

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
    drawLines();
    drawLinesvertical();
}



function drawLines() {

    let step = width / horizontallines;
    for(let i = 0; i <= horizontallines; i++)
    Utils.drawLine(0 + (10 * i), 0, width - (10 * i), height);

}


function drawLinesvertical() {
    let step = width / horizontallines;
    for(let i = 0; i <= verticallines; i++)
    Utils.drawLine(0, 0 + i * 10, width, height - i * 10);
}
