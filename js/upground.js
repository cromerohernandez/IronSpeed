class Upground {
  constructor(ctx, discs, orderDiscs) {
    this.ctx = ctx
    this.discs = discs
    this.orderDiscs = orderDiscs
    this.intervalId = null
  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
    }, 1000 / 60)
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {                                                           /*¿mejorar?*/
    for (let i = 0; i < this.discs.length; i++) {
      if (!this.orderDiscs.includes(this.discs[i].id)) {
        this.discs[i].draw()
      }
    }
    if (this.orderDiscs.length > 0) {
      this.orderDiscs.forEach(order => this.discs[order-1].draw())
      this.orderDiscs.forEach(order => this.discs[order-1].animate())
    }
  }

  _move() {
    if (this.orderDiscs.length > 0) {
      this.orderDiscs.forEach(order => this.discs[order-1].move())
    }
  }

}