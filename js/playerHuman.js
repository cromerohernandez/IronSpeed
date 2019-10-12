class PlayerHuman extends Player {
  constructor(id, discX, senseDiscX, discY, senseDiscY, discColor, game, cardKey, discKey,) {
    super(id, discX, senseDiscX, discY, senseDiscY, discColor, game)
    this.typePlayer = "human"
    this.cardKey = cardKey
    this.discKey = discKey
    this._setListeners()
  }

  updateCurrentCard() {
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
        console.log(`cardKey PLAYER${this.id} pressed`)
        this.throwCard()
      } else if (e.keyCode === this.discKey) {
        console.log(`discKey PLAYER${this.id} pressed`)
        this.throwDisc()
      }
    })
  }

}