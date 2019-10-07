class Disc {
  constructor(ctx/*, x, y, img*/) {
    this.ctx = ctx
    this.w = 5
    this.h = 5
    this.x = this.ctx.canvas.width/2 - this.w/2
    this.y = this.ctx.canvas.height/2
    this.vx = 0
    this.vy = 0
    this.img = new Image()
    this.img.src = /*img*/ "images/CrossGreen.png"
    /*this.img.frames = 18
    this.img.frameIndex = 0*/
  }

  draw() {
    /*this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )*/
    this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {

  }
}