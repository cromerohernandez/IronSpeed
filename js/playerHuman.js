class PlayerHuman extends Player {
  constructor(id, game, cardKey, discKey) {
    super(id, game)
    this.cardKey = cardKey
    this.discKey = discKey
    this._setListeners()
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
        document.getElementById(`cardCenter${this.id}`).style.background = `url("images/${this.centerCards[0].img}")`
        document.getElementById(`cardCenter${this.id}`).style.backgroundSize = 'cover'
      } else if (e.keyCode === this.discKey) {
        console.log(`discKey player${this.id}`)
        this.throwDisc()
      }
    })
  }

}