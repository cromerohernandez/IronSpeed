class PlayerComputer extends Player {
  constructor(id, discX, senseDiscX, discY, senseDiscY, game, responseTimeComputerLevel, errorDiscComputerLevel) {
    super(id, discX, senseDiscX, discY, senseDiscY, game)
    this.typePlayer = "computer"
    this.game = game
    this.responseTimeComputerLevel = responseTimeComputerLevel
    this.errorDiscComputerLevel = errorDiscComputerLevel
  }

  updateCurrentCard() {
    super.updateCurrentCard()
  }

  updateCounterCards() {
    super.updateCounterCards()
  }

  throwCard() {
    const responseTime = (Math.random() * 1000) + (this.responseTimeComputerLevel / 1.5)
    setTimeout(() => {super.throwCard()}, responseTime)
  }

  _throwDisc() {
    const success = (Math.random() * 1) - this.errorDiscComputerLevel
    if (success > 0) {
      const responseTime = (Math.random() * 500) + this.responseTimeComputerLevel
      setTimeout(() => {super.throwDisc()}, responseTime)
      console.log(`disc${this.id}`)
    }
  }

  checkThrowDisc() {
    if (this.game.turn === 'discTurn') {
      this._throwDisc()
      return
    }
    const error = (Math.random() * 1) - this.errorDiscComputerLevel
    if (error < 0) {
      this._throwDisc()
      return
    }
    if (this.centerCards.length > 0) {
      const propCompare = this.game.propCheck
      let playersCompare = []
      for (let i = 0; i < this.game.players.length; i++) {
        if (((i + 1) !== this.id) && (this.game.players[i].centerCards.length > 0)) {
          playersCompare.push(this.game.players[i])
        }
      }
      for (let i = 0; i < playersCompare.length; i++) {
        if (playersCompare[i].centerCards[0][propCompare] === this.centerCards[0][propCompare]) {
          this._throwDisc()
          return
        }
      }
    }
  }

}