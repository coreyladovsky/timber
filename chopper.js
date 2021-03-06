class Chopper {
  constructor(ctx) {
     (this.x = 10),
       (this.y = 10),
       (this.vx = 5),
       (this.vy = 5),
       (this.radius = 2),
       (this.color = "black"),
       (this.ctx = ctx),
       (this.width = 80),
       (this.height = 130),
       (this.movement = { up: false, down: false, left: false, right: false });
   }

   draw() {
     this.ctx.fillRect(this.x, this.y, this.width, this.height);;
     this.ctx.fillStyle = 'green';
   }

   updatePosition() {

     if (this.movement.up) {
       this.y -= this.vy;
       if(this.y < 0) {
         this.y += this.vy
       }
     }
     if (this.movement.down) {
       this.y += this.vy;
       if(this.y + this.height > canvas.height) {
         this.y -= this.vy
       }
     }
     if (this.movement.right) {
       this.x += this.vx;
       if(this.x + this.width > canvas.width) {
         this.x -= this.vx
       }
     }
     if (this.movement.left) {
       this.x -= this.vx;
       if(this.x < 0) {
         this.x += this.vy
       }
     }
   }
 }



export default Chopper;
