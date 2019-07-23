import Chopper from './chopper.js';
import { keyupListner, keydownListner } from './chopperMovement.js'

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext('2d')
    this.chopper = new Chopper(this.ctx)
    this.step = this.step.bind(this)
  }

  step() {
    this.ctx.clearRect(0,0, 800, 500);
    this.chopper.draw();
    this.cancelFrame = requestAnimationFrame(this.step);
  }

}

export default Game;
