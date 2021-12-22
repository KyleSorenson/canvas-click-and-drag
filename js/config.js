"use strict";

let CANVAS_WIDTH = window.innerWidth;
let CANVAS_HEIGHT = window.innerHeight;

let canvas = document.getElementById('canvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let context = canvas.getContext('2d');

export { 
  context,
  canvas, 
  CANVAS_WIDTH, 
  CANVAS_HEIGHT
};