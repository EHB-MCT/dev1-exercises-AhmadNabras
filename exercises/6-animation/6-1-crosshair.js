"use strict"




import context from "../../scripts/context.js"

import * as Utils from "../../scripts/utils.js"



let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawLine;



function drawLine(eventData) {

    context.fillStyle = "red";
    context.fillRect(0, 0, width, height);

    context.lineWidth = 5;
    context.strokeStyle = "white";
    Utils.drawLine(eventData.x, 0, eventData.x, height);
    Utils.drawLine(0, eventData.y, width, eventData.y);

}

