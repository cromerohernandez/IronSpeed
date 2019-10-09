class Player {
  constructor(id, discX, senseDiscX, discY, senseDiscY, discColor, game) {
    /*this.ctx = ctx*/
    this.id = id
    /*this.name = name*/
    /*this.color*/
    this.playerCards = []
    this.centerCards = []
    this.disc = new Disc(ctx, discX, senseDiscX, discY, senseDiscY, discColor)
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
    if ((this.game.turn === this.id) && (this.game.orderDiscs.length === 0)) {
      if (this.playerCards.length === 0){
        console.log(`player${this.id} wins`)   /*revisar que gane cuando se quede sin cartas en playerCards y playerCenter?????*/
        return
      }
      let card = this.playerCards.pop()
      this.centerCards.unshift(card)
      this.updateCurrentCard()
      this.updateCounterCards()
      this.game.incrementTurn()
      console.log(`PLAYER${this.id} throws a card`)
      if (this.game.players[this.game.turn-1].typePlayer === "computer") {
        this.game.players[this.game.turn-1].throwCard()
      }
      this.game.playNextComputerPlayer()
    } else {
      console.log(`PLAYER${this.id} it´s not your turn`)
      console.log(`PLAYER${this.game.turn} it´s your turn`)
    }
  }

  throwDisc(){
    if (this.centerCards.length === 0) {
      console.log(`PLAYER${this.id} can´t throw the disc now`)
      return
    }
    if (!this.game.orderDiscs.includes(this.id)) {
      this.game.orderDiscs.push(this.id)
      console.log(`PLAYER${this.id} throws the disc`)
      if (this.game.orderDiscs.length === 1) {
        setTimeout(() => {this.game.duel()}, 3000)
      }
    }
  }

}