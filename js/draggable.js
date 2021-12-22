"use strict";

import { 
  CANVAS_WIDTH, CANVAS_HEIGHT, canvas
} from './config.js';

import ColorBlock from "./sprites/colorblock.js"

class Draggable extends ColorBlock {

  constructor(
    context, 
    overlays = false, 
    width = 150, 
    height = 150, 
    rows = 150, 
    columns = 150, 
    hover = false
  ) {

      super(width, height, rows, columns, hover);

      this.context = context;
      this.overlays = overlays;
      this.mouseIsDown = false;
      this.mouseIsOver = false;
      this.cursorPos = {
        x: 0,
        y: 0
      }
      this.cursorDragStart = {
        x: 0,
        y: 0
      };
      this.cursorDragEnd = {
        x: 0,
        y: 0
      };
      this.dragOffset = {
        x: 0,
        y: 0
      };
      this.blockPosAtDragStart = {
        x: 0,
        y: 0
      };
      this.blockPosAtDragEnd = {
        x: 0,
        y: 0
      };
  }


  init() {
    this.blockPosAtDragStart.x = this.pos.x;
    this.blockPosAtDragStart.y = this.pos.y;
    
    if (this.overlays) {
      this.drawOverlays();
    }

    // Initializes all event listeners at once
    canvas.addEventListener('mousemove',  this.mouseMoveHandler.bind(this) );
    canvas.addEventListener('mousedown', this.mouseDownHandler.bind(this) );
    canvas.addEventListener('mouseup', this.mouseUpHandler.bind(this) );
  }


  mouseMoveHandler(e) {
    // ---- Checks for mouseover event (if cursor is hovering over block) ---- //
    this.cursorPos = {
      x: e.clientX,
      y: e.clientY
    };

    this.mouseIsOver = ((cursorPos, rect) => {

      return (
        cursorPos.x >= rect.left 
        && cursorPos.x <= rect.right
        && cursorPos.y >= rect.top
        && cursorPos.y <= rect.bottom
      ) ? true : false;
  
    })(this.cursorPos, this.rect);

    if (this.mouseIsOver) {
      canvas.style.cursor = "move";
      this.hover = true;
      this.redraw();
    } else {
      canvas.style.cursor = "default";
      this.hover = false;
      this.redraw();
    }
    // ---- End mouseover check ---- //



    // ---- Handles click and drag event ---- //
    if (this.mouseIsDown && this.mouseIsOver) {

      this.cursorDragEnd = this.cursorPos;

      this.dragOffset = {
        x: this.cursorDragEnd.x - this.cursorDragStart.x,
        y: this.cursorDragEnd.y - this.cursorDragStart.y
      }

      this.blockPosAtDragEnd = {
        x: this.blockPosAtDragStart.x + this.dragOffset.x,
        y: this.blockPosAtDragStart.y + this.dragOffset.y
      }

      this.pos.x = this.blockPosAtDragEnd.x;
      this.pos.y = this.blockPosAtDragEnd.y;
    }

    if (this.overlays) {
      this.drawOverlays();
    }
  }


  mouseDownHandler(e) {
    this.mouseIsDown = true;

    if (this.hover) {
      this.cursorDragStart = {
        x: e.clientX,
        y: e.clientY
      };
    }
  }


  mouseUpHandler(e) {
    if(this.mouseIsDown && this.mouseIsOver) {
      this.blockPosAtDragStart = this.blockPosAtDragEnd;
    }
    this.mouseIsDown = false;
  }


  redraw( context = this.context ) {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.draw(context);
  }

  drawOverlays( context = this.context ) {
    context.fillStyle = 'white';
    context.fillText(`Drag Start: [${this.cursorDragStart.x},${this.cursorDragStart.y}]`, 10, 20);
    context.fillText(`Drag End: [${this.cursorDragEnd.x},${this.cursorDragEnd.y}]`, 10, 40);
    context.fillText(`Drag Offset: [${this.dragOffset.x},${this.dragOffset.y}]`, 10, 60);
    context.fillText(`Block Pos At Drag Start: [${this.blockPosAtDragStart.x},${this.blockPosAtDragStart.y}]`, 10, 80);
    context.fillText(`Block Pos At Drag End: [${this.blockPosAtDragEnd.x},${this.blockPosAtDragEnd.y}]`, 10, 100);
  }

}

export default Draggable;