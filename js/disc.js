class Disc {
  constructor(ctx, discX, discY, discColor) {
    this.ctx = ctx
    this.w = DISC_SIZE
    this.h = DISC_SIZE
    this.x = discX
    this.y = discY
    this.vx = 0
    this.vy = 0

    this.img = new Image()
    this.img.src = `./images/IronSpeedDiscSprite-${discColor}.png`
    this.img.frames = 18
    this.img.frameIndex = 0
    this.img.onload = () => this.draw()

    this.tick = 0
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
    this.animate()
  }

  animate() {
    this.tick++
    if (this.tick > 2) {
      this.tick = 0
      this.img.frameIndex++
    }
    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0
    }
  }
}