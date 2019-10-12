class Disc {
  constructor(ctx, id, discX, senseDiscX, discY, senseDiscY, discColor) {
    this.ctx = ctx
    this.id = id
    this.w = DISC_SIZE
    this.h = DISC_SIZE
    this.x0 = discX
    this.x= this.x0
    this.maxX = 0
    this.y0 = discY
    this.y = this.y0
    this.maxY = 0
    this.senseDiscX = senseDiscX
    this.vx0 = 30
    this.vx = this.senseDiscX * this.vx0
    this.senseDiscY = senseDiscY
    this.vy0 = 30
    this.vy = this.senseDiscY * this.vy0
    this.deviation = 0

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
    if ((this.x > this.x0) && (this.x < this.maxX) && (this.senseDiscY === 0) || 
    (this.x < this.x0) && (this.x > this.maxX) && (this.senseDiscY === 0)  ||
    (this.y > this.y0) && (this.y < this.maxY) && (this.senseDiscX === 0)  || 
    (this.y < this.y0) && (this.y > this.maxY) && (this.senseDiscX === 0)  ) {
      this.tick++
      if (this.tick > 0.5) {
        this.tick = 0
        this.img.frameIndex++
      }
      if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0
      }
    }
  }

  move() {
    this.x += (this.vx + (this.senseDiscY * this.deviation))
    this.y += (this.vy + (this.senseDiscX * this.deviation))
    if ((this.vx > 0 && this.x >= this.maxX) || 
    (this.vx < 0 && this.x <= this.maxX) ||
    (this.vy > 0 && this.y >= this.maxY) || 
    (this.vy < 0 && this.y <= this.maxY)) {
      this.vx = 0
      this.vy = 0
      this.deviation = 0
    }
  }

  resetDisc() {
    this.x = this.x0
    this.y = this.y0
    this.tick = 0
    this.img.frameIndex = 0
    this.vx = this.senseDiscX * this.vx0
    this.vy = this.senseDiscY * this.vy0
    this.deviation = 0
  }
}