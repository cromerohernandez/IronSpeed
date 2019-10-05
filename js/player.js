class Player {
  constructor(id, game) {
    /*this.ctx = ctx*/
    this.id = id
    /*this.name = name*/
    /*this.color*/
    this.playerCards = []
    this.centerCards = []
    this.game = game
  }

  throwCard() {
    if (this.game.turn === this.id) {
      this.game.firstDisc = 0
      if (this.playerCards.length === 0){
        console.log(`player${this.id} wins`)
        return
      }
      let card = this.playerCards.pop()
      this.centerCards.unshift(card)
      this.game.incrementTurn()
    } else {
      console.log(`player${this.id} isn't your turn`)
    }
  }

  throwDisc(){
    if (this.game.firstDisc === 0) {
      this.game.firstDisc = this.id
      this.game.duel()
    }
  }
 
}