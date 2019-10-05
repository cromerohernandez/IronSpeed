class IronSpeed {
  constructor() {
    this.deck = deck
    this.player1 = new PlayerHuman(1,this, Z_KEY, X_KEY,)
    this.player2 = new PlayerHuman(2, this, ARROWDOWN_KEY, ARROWRIGHT_KEY)
    /*this.player3 = new PlayerComputer(3, this)*/
    /*this.player4 = new PlayerComputer(4, this)*/
    this.players = [this.player1, this.player2/*, this.player3, this.player4*/]
    this.turn = 1
    this.firstDisc = 0
    this.propCheck = "form"
    this._setCounterCards()
  }

  _setCounterCards() {
    for (let i = 0; i < this.players.length; i++) {
      document.getElementById(`counterCards${this.players[i].id}`).innerText = `${this.players[i].playerCards.length}`
    }
  } 

  dealCards() {
    while (this.deck.length > 0) {
      for (let i = 0; i < this.players.length; i++) {
        let n = Math.floor(Math.random() * (this.deck.length))
        this.players[i].playerCards.push(this.deck[n])
        this.deck.splice(n, 1)
      }
    }
  }

  incrementTurn() {
    if (this.turn === this.players.length) {
      this.turn = 1
    } else {
    this.turn ++
    }
  }

  _addSingleCardLoser(idLoser, idWinner) {
    let addCard = this.players[idWinner - 1].centerCards.pop()
    this.players[idLoser - 1].playerCards.unshift(addCard)
  }


  _addCardsLoser(idLoser, idWinner) {
    for (let i = this.players[idWinner - 1].centerCards.length; i > 0; i--) {
      this._addSingleCardLoser(idLoser, idWinner)
    }
  }

  _checkCards(id, prop) {
    let checkPlayer = this.players[id - 1]
    let loserPlayers = []
    for (let i = 0; i < this.players.length; i++) {
      if ((checkPlayer.id !== this.players[i].id ) && 
      (checkPlayer.centerCards[0][prop] === this.players[i].centerCards[0][prop])) {
        loserPlayers.push(this.players[i].id)
        console.log(loserPlayers)
      }
    }
    /// checkPlayer loses ///
    if (loserPlayers.length === 0) {
      for (let i = 0; i < this.players.length; i++) {
        this._addCardsLoser(id, i + 1)
      }
      this.turn = id
      console.log(`mistake player${id}, loses the duel`)
      return
    } 
    /// checkPlayer wins ///
    else if (loserPlayers.length > 0) {
      let currentPlayer = id
      const _nextLoserPlayer = () => {
        if(id >= this.players.length) {
          currentPlayer = 1
        } else {
          currentPlayer++
        }
      }
      while(checkPlayer.centerCards.length > 0) {
        if (loserPlayers.includes(currentPlayer)) {
          this._addSingleCardLoser(currentPlayer, id)
        }
        _nextLoserPlayer()
      }

      /*let currentPlayer = id                        ////////¿?¿?¿?¿Asignar turno a primer perdedor después de ganador?¿?¿?¿?¿?
      if(loserPlayers.includes(currentPlayer)) {
        this.turn = currentPlayer
      } else {
        continue
      }*/

          console.log(`player${id} vs players:${loserPlayers} | player${id} wins the duel`)
      return
    }
  }

  duel() {
    this._checkCards(this.firstDisc, this.propCheck)
    console.log(`turn player${this.turn}`)
    /*this.firstDisc = 0*/
  }

}