class PlayerHuman extends Player {
  constructor(id, discX, discY, discColor, game, cardKey, discKey,) {
    super(id, discX, discY, discColor, game)
    this.typePlayer = "human"
    this.cardKey = cardKey
    this.discKey = discKey
    this._setListeners()
  }

  updateCurrentCard(){
    super.updateCurrentCard()
  }

  updateCounterCards() {
    super.updateCounterCards()
  }

  throwCard() {
    super.throwCard()
  }

  throwDisc(){
    /*super.throwDisc()*/
    this.disc.animate()
  }

  _setListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.cardKey) {
        console.log(`cardKey player${this.id}`)
        this.throwCard()
      } else if (e.keyCode === this.discKey) {
        console.log(`discKey player${this.id}`)
        this.throwDisc()
      }
    })
  }

}