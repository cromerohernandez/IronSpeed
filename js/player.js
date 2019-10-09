class Player {
  constructor(id, discX, discY, discColor, game) {
    /*this.ctx = ctx*/
    this.id = id
    /*this.name = name*/
    /*this.color*/
    this.playerCards = []
    this.centerCards = []
    this.disc = new Disc(ctx, discX, discY, discColor)
    this.game = game
  }

  updateCurrentCard(){
    document.getElementById(`cardCenter${this.id}`).style.background = `url('images/${this.centerCards[0].img}')`
    document.getElementById(`cardCenter${this.id}`).style.backgroundSize = 'cover'
  }

  updateCounterCards(){
    document.getElementById(`counterCards${this.id}`).innerText = `${this.playerCards.length}`
  }

  throwCard() {
    if (this.game.turn === this.id) {
      this.game.firstDisc = 0    /*¿mover a otro sitio?*/
      if (this.playerCards.length === 0){
        console.log(`player${this.id} wins`)   /*revisar que gane cuando se quede sin cartas en playerCards y playerCenter?????*/
        return
      }
      let card = this.playerCards.pop()
      this.centerCards.unshift(card)
      this.updateCurrentCard()
      this.updateCounterCards()
      this.game.incrementTurn()
      console.log(`player${this.id} throw a card`)
      if (this.game.players[this.game.turn-1].typePlayer === "computer") {
        this.game.players[this.game.turn-1].throwCard()
      }
    } else {
      console.log(`player${this.id} isn't your turn`)
    }
  }

  throwDisc(){
    if (this.game.firstDisc === 0) {
      this.game.firstDisc = this.id
      console.log(`player${this.id} throw the disc`)
      this.game.duel()
    }
  }
 
}