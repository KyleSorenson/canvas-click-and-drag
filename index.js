"use strict";

import { 
  context as ctx, 
  CANVAS_WIDTH, CANVAS_HEIGHT
} from './js/config.js';

import Draggable from './js/draggable.js';

const spectrum = new Draggable(ctx, true);
spectrum.place(Math.round(CANVAS_WIDTH/2), Math.round(CANVAS_HEIGHT/2));
spectrum.init();
spectrum.draw(ctx);