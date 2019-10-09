class Upground {
  constructor(ctx, discs) {
    this.ctx = ctx
    this.discs = discs
  }

  run() {
    /*this._clear()*/
    setInterval(() => this._draw(), 1000/60)
    /*this._move()*/
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