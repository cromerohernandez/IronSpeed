class PlayerComputer extends Player {
  constructor(id, discX, discY, game) {
    super(id, discX, discY, game)
  }

  updateCurrentCard(){
    super.updateCurrentCard()
  }

  updateCounterCards() {
    super.updateCounterCards()
  }

  throwCard() {
    /*if (this.game.turn === this.id){
      setTimeout(() => {super.throwCard()}, 2000)
    }*/
  }

  throwDisc(){
    /*pendiente delay*/
    super.throwDisc()
  }
}