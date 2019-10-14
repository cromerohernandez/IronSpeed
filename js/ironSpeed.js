class IronSpeed {
  constructor(ctx) {
    this.deck = deck
    this.player1 = new PlayerHuman(1, -(DISC_SIZE*3/4), 1, (window.innerHeight/2 - DISC_SIZE/2), 0, "blue", this, Z_KEY, X_KEY,)
    this.player2 = new PlayerComputer(2, (window.innerHeight/2 - DISC_SIZE/2), 0, (window.innerHeight - DISC_SIZE/4), -1, "green", this)
    this.player3 = new PlayerHuman(3, (window.innerHeight - DISC_SIZE/4), -1, (window.innerHeight/2 - DISC_SIZE/2), 0, "red", this, ARROWDOWN_KEY, ARROWRIGHT_KEY)
    this.player4 = new PlayerComputer(4, (window.innerHeight/2 - DISC_SIZE/2), 0, -(DISC_SIZE*3/4), 1, "yellow", this)
    this.players = [this.player1, this.player2, this.player3, this.player4]
    this.turn = 1
    this.orderDiscs = []
    this.propCheck = "form"
    this.upground = new Upground(ctx, this)
  }
  
  _updateAllCurrentsCards() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].centerCards.length === 0) {
        document.getElementById(`cardCenter${this.players[i].id}`).style.background = `url('./images/CardMark.png')`
        document.getElementById(`cardCenter${this.players[i].id}`).style.backgroundSize = 'cover'
      } else if (this.players[i].centerCards.length > 0) {
        this.players[i].updateCurrentCard()
      }
    }
  }

  _updateAllCountersCards() {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].updateCounterCards()
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
    this._updateAllCurrentsCards()
    this._updateAllCountersCards()
  }

  checkAllCardsInCenter() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].playerCards.length > 0) {
        return
      }
    }
    console.log(`All the cards are in the center. Each player pick up their cards. ¿¿¿PLAYER1??? start again.`)
    for (let i = 0; i < this.players.length; i++) {
      this._addCardsLoser(i + 1, i + 1)
    }
    setTimeout(() => {
      this._updateAllCurrentsCards()
      this._updateAllCountersCards()
    }, 1000)
  }

  incrementTurn() {
    if (this.turn === this.players.length) {
      this.turn = 1
    } else {
    this.turn ++
    }
  }

  checkNextTurn() {
    if (this.players[this.turn - 1].playerCards.length === 0) {
      this.incrementTurn()
    }
  }

  playDiscsComputersPlayers() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].typePlayer === 'computer') {
        this.players[i].throwDisc()
      }
    }
  }

  playCardNextComputerPlayer() {
    if (this.players[this.turn-1].typePlayer === 'computer') {
      this.players[this.turn-1].throwCard()
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
    if (checkPlayer.centerCards.length === 0) {
      for (let i = 0; i < this.players.length; i++) {
        this._addCardsLoser(id, i + 1)
      }
      console.log(`mistake player${id}, loses the duel`)
      this.turn = id
      return
    }
    let losersPlayers = []
    for (let i = 0; i < this.players.length; i++) {
      if (checkPlayer.id !== this.players[i].id) {
        if ((this.players[i].centerCards.length > 0) && (checkPlayer.centerCards[0][prop] === this.players[i].centerCards[0][prop])) {
          losersPlayers.push(this.players[i].id)
        }
      }
    }
    /// checkPlayer loses ///
    if (losersPlayers.length === 0) {
      for (let i = 0; i < this.players.length; i++) {
        this._addCardsLoser(id, i + 1)
      }
      console.log(`mistake PLAYER${id}, loses the duel`)
      this.turn = id
      return
    } 
    /// checkPlayer wins ///
    else if (losersPlayers.length > 0) {
      let currentPlayer = id
      const _nextLoserPlayer = () => {
        if(currentPlayer >= this.players.length) {
          currentPlayer = 1
        } else {
          currentPlayer++
        }
      }
      while(checkPlayer.centerCards.length > 0) {
        if (losersPlayers.includes(currentPlayer)) {
          this._addSingleCardLoser(currentPlayer, id)
        }
        _nextLoserPlayer()
      }
      for (let i = 0; i < losersPlayers.length; i++) {
        let j = losersPlayers[i]
        this._addCardsLoser(j, j)
      }
      console.log(`PLAYER${id} vs PLAYERS:${losersPlayers} | PLAYER${id} wins the duel`)
      
      let nextTurn = id
      for (let i = 0; i <= this.players.length; i++) {
        if(nextTurn >= this.players.length) {
          nextTurn = 1
        } else {
          nextTurn++
        }
        if(losersPlayers.includes(nextTurn)) {
          this.turn = nextTurn
          return
        }
      }
    }
  }

  _checkWinner() {
    let winners = []
    for (let i = 0; i < this.players.length; i++) {
      if ((this.players[i].centerCards.length === 0) && (this.players[i].playerCards.length === 0)) {
        winners.push(this.players[i].id)
      }
    }
    if (winners.length > 0) {
      this.turn = null
      winners.forEach(winner => console.log(`player${winner} wins`))
    }
  }

  duel() {
    this._checkCards(this.orderDiscs[0], this.propCheck)
    this._updateAllCurrentsCards()
    this._updateAllCountersCards()
    this.players.forEach(player => player.disc.resetDisc())
    this.orderDiscs = []
    this._checkWinner()
    if (this.turn === null) {
      return
    } else {
      console.log(`PLAYER${this.turn} it´s your turn`)
      this.playCardNextComputerPlayer()
    }
  }

}