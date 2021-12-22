"use strict";

import Sprite from "../sprite.js";

class SpectrumBlock extends Sprite {
  
  constructor(width = 150, height = 150, rows = 50, columns = 50, hover = false) {
    super(width, height);
    this.rows = rows;
    this.columns = columns;
    this.hover = hover;
  }
    
  draw(ctx) {

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
  
        let iOffset = 360 / this.rows;
        let jOffset = 100 / this.columns;
        ctx.fillStyle = `hsl( ${Math.floor(360 - iOffset * i)}, 60%, ${Math.floor(100 - jOffset * j)}% )`;
  
        let boxWidth = this.width / this.rows;
        let boxHeight = this.height / this.columns;

        ctx.fillRect(
          i * boxWidth + this.pos.x - this.width/2, 
          j * boxHeight + this.pos.y - this.height/2, 
          boxWidth, 
          boxHeight
        );

      }  
    };
  
    if (this.hover) {

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(this.pos.x - this.width/2, this.pos.y - this.height/2, this.width, this.height);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.05)';
      ctx.fillRect(this.pos.x - this.width/2, this.pos.y - this.height/2, this.width, this.height);
      
    }

  }

}

export default SpectrumBlock;