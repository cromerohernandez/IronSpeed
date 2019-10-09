class PlayerHuman extends Player {
  constructor(id, discX, discY, game, cardKey, discKey,) {
    super(id, discX, discY, game)
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
    super.throwDisc()
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