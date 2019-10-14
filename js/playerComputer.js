class PlayerComputer extends Player {
  constructor(id, discX, senseDiscX, discY, senseDiscY, discColor, game) {
    super(id, discX, senseDiscX, discY, senseDiscY, discColor, game)
    this.typePlayer = "computer"
    this.game = game
  }

  updateCurrentCard() {
    super.updateCurrentCard()
  }

  updateCounterCards() {
    super.updateCounterCards()
  }

  throwCard() {
    const responseTime = (Math.random() * 1000) + 500
    setTimeout(() => {super.throwCard()}, responseTime)
  }

  throwDisc() {
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
          const responseTime = (Math.random() * 500) + 500
          setTimeout(() => {super.throwDisc()}, responseTime)
          console.log(`disc${this.id}`)
          return
        }
      }
    }
  }

}