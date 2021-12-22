"use strict";

class Sprite {
  
  constructor(width, height) {
    this.width = width;
    this.height = height;   
  }

  pos = {
    x: 0,
    y: 0
  }

  get rect() {

    return {
      width: this.width,
      height: this.height,
      top: this.pos.y - this.height/2,
      right: this.pos.x + this.width/2,
      bottom: this.pos.y + this.height/2,
      left: this.pos.x - this.width/2,
      topLeft: {
        x: this.pos.x - this.width/2,
        y: this.pos.y - this.height/2
      },
      topMiddle: {
        x: this.pos.x,
        y: this.pos.y - this.height/2
      },
      topRight: {
        x: this.pos.x + this.width/2,
        y: this.pos.y - this.height/2
      },
      centerLeft: {
        x: this.pos.x - this.width/2,
        y: this.pos.y
      },
      centerRight: {
        x: this.pos.x + this.width/2,
        y: this.pos.y
      },
      bottomLeft: {
        x: this.pos.x - this.width/2,
        y: this.pos.y + this.height/2
      },
      bottomMiddle: {
        x: this.pos.x,
        y: this.pos.y + this.height/2
      },
      bottomRight: {
        x: this.pos.x + this.width/2,
        y: this.pos.y + this.height/2
      }
    }

  }

  place(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

}

export default Sprite;