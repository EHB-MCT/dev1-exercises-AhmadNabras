"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let horizontallines = 60;
let verticallines = 30;

let width = 600;
let height = 300;


drawLines();

function drawLines() {

    let step = width / horizontallines;
    for(let i = 0; i <= horizontallines; i++)
    Utils.drawLine(0 + (10 * i), 0, width - (10 * i), height);
    Utils.drawLine(300 + i * 10, 0, 300 - i * 10, 300);
    Utils.drawLine(0, i * 10, 600, 300 - i * 10);
}