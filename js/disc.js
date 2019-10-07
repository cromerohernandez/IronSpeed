class Disc {
  constructor(ctx, x, y, img) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.vx = 0
    this.vy = 0
    this.img = new Image()
    this.img.src = img
    /*this.img.frames = ¿?
    this.ima.frameIndex = ¿?*/
  }

  draw() {
    this.ctx.drawImage(
      this.img
    )
  }

  move() {

  }
}