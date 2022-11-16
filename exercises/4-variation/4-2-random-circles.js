"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.fillRect(0, 0, width, height);
    drawBubbles();
}

function drawBubbles() {
    //100 = 100 circles 
    for (let i = 0; i < 100; i++) {
        // let x = margin 200 on width (right and left)
        let x = Utils.randomNumber(200, width - 200);

        // Let y = margin 200 on height (bottom and top)
        let y = Utils.randomNumber(200, height - 200);

        //Size of the circle. Random size between 10 and 100)
        let size = Utils.randomNumber(10, 100);

        //fill circle with hsla colors. 
        context.fillStyle = Utils.hsla(Utils.randomNumber(150, 250), 75, 50, 50);
        Utils.fillCircle(x, y, size);
    }
}