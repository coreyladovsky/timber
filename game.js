import Chopper from './chopper.js';
import { keyupListener, keydownListener } from './chopperMovement.js'

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext('2d')
    this.chopper = new Chopper(this.ctx)
    this.step = this.step.bind(this)
  }

  step() {
    this.ctx.clearRect(0,0, 800, 500);
    this.move();
    this.chopper.draw();
    this.chopper.updatePosition();
    this.cancelFrame = requestAnimationFrame(this.step);
  }

  move() {
   document.addEventListener("keydown", keydownListener(this.chopper));
   document.addEventListener("keyup", keyupListener(this.chopper));
 }

}

export default Game;
