class PlayerComputer extends Player {
  constructor(id, discX, senseDiscX, discY, senseDiscY, discColor, game) {
    super(id, discX, senseDiscX, discY, senseDiscY, discColor, game)
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