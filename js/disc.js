class Disc {
  constructor(ctx, discX, senseDiscX, discY, senseDiscY, discColor) {
    this.ctx = ctx
    this.w = DISC_SIZE
    this.h = DISC_SIZE
    this.x0 = discX
    this.x= this.x0
    this.maxX = window.innerHeight/2 - (DISC_SIZE/2)
    this.y0 = discY
    this.y = this.y0
    this.senseDiscX = senseDiscX
    this.vx = this.senseDiscX * 30
    this.senseDiscY = senseDiscY
    this.vy = this.senseDiscY * 0

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
  }

  animate() {
    this.tick++
    if (this.tick > 0.5) {
      this.tick = 0
      this.img.frameIndex++
    }
    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0
    }
    if ((this.senseDiscX > 0) && (this.x >= this.maxX) || (this.senseDiscX < 0) && (this.x <= this.maxX)) {
      this.img.frameIndex = 0   /*!!!!!!!!!!!!!!random!!!!!!!!!!!!*/
    }
  }

  move() {
    this.x += this.vx
    this.y += this.vy
    if ((this.vx > 0 && this.x >= this.maxX) || (this.vx < 0 && this.x <= this.maxX)) {
      this.vx = 0
      this.vy = 0
    }
  }

  resetDisc() {
    this.x = this.x0
    this.y = this.y0
    this.img.frameIndex = 0
  }
}