class Upground {
  constructor(ctx) {
    this.ctx = ctx
    this.disc1 = new Disc(ctx)
  }

  run() {
    /*this._clear()*/
    this._draw()
    /*this._move()*/
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    this.disc1.draw()
  }

  _move() {

  }

}