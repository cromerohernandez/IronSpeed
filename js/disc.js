class Disc {
  constructor(ctx, x, y, /*img*/) {
    this.ctx = ctx
    this.w = 15
    this.h = 15
    this.x = x
    this.y = y
    this.vx = 0
    this.vy = 0
    this.img = new Image()
    this.img.src = /*img*/ "./images/IronSpeedRedDisc-sprite.png"
    this.img.frames = 18
    this.img.frameIndex = 0
    this.img.onload = () => this.draw()
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    )
    /*this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    )*/
  }

  move() {

  }
}