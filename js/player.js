class Player {
  constructor(id, discX, senseDiscX, discY, senseDiscY, discColor, game) {
    /*this.ctx = ctx*/
    this.id = id
    /*this.name = name*/
    /*this.color*/
    this.playerCards = []
    this.centerCards = []
    this.disc = new Disc(ctx, id, discX, senseDiscX, discY, senseDiscY, discColor)
    this.game = game
  }

  updateCurrentCard() {
    document.getElementById(`cardCenter${this.id}`).style.background = `url('images/${this.centerCards[0].img}')`
    document.getElementById(`cardCenter${this.id}`).style.backgroundSize = 'cover'
  }

  updateCounterCards() {
    document.getElementById(`counterCards${this.id}`).innerText = `${this.playerCards.length}`
  }

  throwCard() {
    if ((this.game.orderDiscs.length === 0) && (this.game.turn === this.id)) {
      let card = this.playerCards.pop()
      this.centerCards.unshift(card)
      this.updateCurrentCard()
      this.updateCounterCards()
      this.game.incrementTurn()
      console.log(`PLAYER${this.id} throws a card`)
      /*this.game.checkAllCardsCenter()*/
      this.game.playDiscsComputersPlayers()
      if (this.game.orderDiscs.length === 0) {
        this.game.playCardNextComputerPlayer()
      }
    } else {
      console.log(`PLAYER${this.id} it´s not your turn`)
      console.log(`PLAYER${this.game.turn} it´s your turn`)
    }
  }

  throwDisc(){
    if (this.centerCards.length === 0 || this.game.turn === null) {
      console.log(`PLAYER${this.id} can´t throw the disc now`)
      return
    }
    if (!this.game.orderDiscs.includes(this.id)) {
      this.disc.maxX = ((window.innerHeight / 2) - (3 * DISC_SIZE / 4)) + (Math.random() * (DISC_SIZE / 2))
      this.disc.maxY = ((window.innerHeight / 2) - (3 * DISC_SIZE / 4)) + (Math.random() * (DISC_SIZE / 2))
      this.game.orderDiscs.push(this.id)
      console.log(`PLAYER${this.id} throws the disc`)
      if (this.game.orderDiscs.length === 1) {
        setTimeout(() => {this.game.duel()}, 3000)
      }
    }
  }

}