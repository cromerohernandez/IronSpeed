class Upground {
  constructor(ctx, discs) {
    this.ctx = ctx
    this.discs = discs
    this.intervalId = null
  }

  run() {

    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
    /*this._move()*/
    }, 1000/60)
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    this.discs.forEach(disc => disc.draw())
  }

  _move() {

  }

}