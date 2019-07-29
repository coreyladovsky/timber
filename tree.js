class Tree {
  constructor(canvas, ctx) {
    this.health = 5
    this.canvas = canvas
    this.x = Math.floor(Math.round() * this.canvas.width)
    this.y = Math.round() * this.canvas.height
    this.radius = 2
    this.color = "black"
    this.ctx = ctx
    this.width = 80
    this.height = 130
  }

  

}

export default Tree;
