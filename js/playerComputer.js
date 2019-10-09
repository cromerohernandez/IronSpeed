class PlayerComputer extends Player {
  constructor(id, discX, discY, discColor, game) {
    super(id, discX, discY, discColor, game)
    this.typePlayer = "computer"
  }

  updateCurrentCard(){
    super.updateCurrentCard()
  }

  updateCounterCards() {
    super.updateCounterCards()
  }

  throwCard() {
    const responseTime = (Math.random() * 1000) + 500
    setTimeout(() => {super.throwCard()}, responseTime)
  }

  throwDisc(){
    /*pendiente delay*/
    super.throwDisc()
  }
}