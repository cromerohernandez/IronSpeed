class Upground {
  constructor(ctx, game) {
    this.ctx = ctx
    this.game = game
    this.discs = game.players.map(player => player.disc)
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

  _draw() {
    for (let i = 0; i < this.discs.length; i++) {
      if (!this.game.orderDiscs.includes(this.discs[i].id)) {
        this.discs[i].draw()
      }
    }
    if (this.game.orderDiscs.length > 0) {
      this.game.orderDiscs.forEach(order => this.discs[order-1].draw())
      this.game.orderDiscs.forEach(order => this.discs[order-1].animate())
    }
  }

  _move() {
    if (this.game.orderDiscs.length > 0) {
      this.game.orderDiscs.forEach(order => this.discs[order-1].move())
    }
  }

}