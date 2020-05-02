class IronSpeed {
  constructor(ctx, humanPlayers) {
    this.deck = deck
    if (humanPlayers === 1) {
      this.player1 = new PlayerComputer(1, -(DISC_SIZE*10/13), 1, (window.innerHeight/2 - DISC_SIZE/2), 0, this)
      this.player2 = new PlayerHuman(2, (window.innerHeight/2 - DISC_SIZE/2), 0, (window.innerHeight - DISC_SIZE*3/13), -1, this, ARROWDOWN_KEY, ARROWRIGHT_KEY)
      this.player3 = new PlayerComputer(3, (window.innerHeight - DISC_SIZE*3/13), -1, (window.innerHeight/2 - DISC_SIZE/2), 0, this)
    } else if (humanPlayers === 2) {
      this.player1 = new PlayerHuman(1, -(DISC_SIZE*10/13), 1, (window.innerHeight/2 - DISC_SIZE/2), 0, this, Z_KEY, X_KEY,)
      this.player2 = new PlayerComputer(2, (window.innerHeight/2 - DISC_SIZE/2), 0, (window.innerHeight - DISC_SIZE*3/13), -1, this)
      this.player3 = new PlayerHuman(3, (window.innerHeight - DISC_SIZE*3/13), -1, (window.innerHeight/2 - DISC_SIZE/2), 0, this, ARROWDOWN_KEY, ARROWRIGHT_KEY)
    } 
    this.player4 = new PlayerComputer(4, (window.innerHeight/2 - DISC_SIZE/2), 0, -(DISC_SIZE*10/13), 1, this)
    this.players = [this.player1, this.player2, this.player3, this.player4]
    this.turn = 0
    this.orderDiscs = []
    this.propCheck = 'form'
    this.upground = new Upground(ctx, this)
  }

  setStartTurn() {
    this.turn = 1
    this.playCardNextComputerPlayer()
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
    console.log(`All the cards are in the center. Each player pick up their cards. PLAYER1 start again.`)
    let messageAllCenter = new Message (`All cards in the center`, 2000)
    messageAllCenter.showMessage()
    let messageRestart = new Message (`PLAYER1 start again`, 1500)
    setTimeout(() => {messageRestart.showMessage()}, 2000)
    for (let i = 0; i < this.players.length; i++) {
      this._addCardsLoser(i + 1, i + 1)
    }
    setTimeout(() => {
      this._updateAllCurrentsCards()
      this._updateAllCountersCards()
    }, 1000)
  }
  
  updatePropCheck() {
    let playersCheck = []
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].centerCards.length > 0) {
        playersCheck.push(this.players[i])
      }
    }
    let possibleColor = false
    for (let i = 0; i < playersCheck.length; i++) {
      if (playersCheck[i].centerCards[0].type === 'disc') {
        this.turn = 'discTurn'
        return
      } else if (playersCheck[i].centerCards[0].type === 'color') {
        this.propCheck = 'color'
        possibleColor = true
      } else if (playersCheck[i].centerCards[0].type === 'normal' && possibleColor === true)  {
        continue
      } else {
        this.propCheck = 'form'
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

  checkNextTurn() {
    if (this.players[this.turn - 1].playerCards.length === 0) {
      this.incrementTurn()
    }
  }

  playDiscsComputersPlayers() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].typePlayer === 'computer') {
        this.players[i].checkThrowDisc()
      }
    }
  }

  playCardNextComputerPlayer() {
    if (this.players[this.turn-1].typePlayer && this.players[this.turn-1].typePlayer === 'computer') {
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
      let messageMistake = new Message (`mistake PLAYER${id}`, 2000)
      messageMistake.showMessage()
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
      let messageMistake = new Message (`mistake PLAYER${id}`, 2000)
      messageMistake.showMessage()
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
      console.log(`${prop} duel | PLAYER${id} vs PLAYERS:${losersPlayers} | PLAYER${id} wins the ${prop} duel`)
      let messageWin = new Message (`PLAYER${id} wins the ${prop} duel`, 2000)
      messageWin.showMessage()      
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
      for (let i = 0; i < winners.length; i++){
        let messageChampion = new Message (`PLAYER${winners[i]} wins!`, 30000, 'winner', winners[i])
        setTimeout(() => {messageChampion.showMessage()}, 2000)
      }
    }
  }

  duelCards() {
    this._checkCards(this.orderDiscs[0], this.propCheck)
    this._updateAllCurrentsCards()
    this._updateAllCountersCards()
    this.players.forEach(player => player.disc.resetDisc())
    this.orderDiscs = []
    this._checkWinner()
    if (this.turn === null) {
      return
    } else {
      console.log(`PLAYER${this.turn} it's your turn`)
      let messageTurn = new Message (`PLAYER${this.turn} it's your turn`, 1500)
      setTimeout(() => {messageTurn.showMessage()}, 2000)
      setTimeout(() => {this.playCardNextComputerPlayer()}, 4000)
    }
  }

  duelDiscs() {
    console.log(`every players must throw the disc`)
    let fullOrderDiscs = this.orderDiscs
    for (let i = 0; i < this.players.length; i++) {
      if (!fullOrderDiscs.includes(this.players[i].id)) {
        fullOrderDiscs.push(this.players[i].id)
      }
    }
    let loser = fullOrderDiscs[this.players.length - 1]
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].centerCards.length > 0) {
      let winner = this.players[i].id
      this._addCardsLoser(loser, winner)
      }
    }
    console.log(`PLAYER${loser} loses`)
    let messageLoser = new Message (`PLAYER${loser} loses`, 1500)
    setTimeout(() => {messageLoser.showMessage()}, 2000)
    this._updateAllCurrentsCards()
    this._updateAllCountersCards()
    this.players.forEach(player => player.disc.resetDisc())
    this.orderDiscs = []
    this.turn = loser
    this._checkWinner()
    if (this.turn === null) {
      return
    } else {
      console.log(`PLAYER${this.turn} it's your turn`)
      let messageTurn = new Message (`PLAYER${this.turn} it's your turn`, 1500)
      setTimeout(() => {messageTurn.showMessage()}, 3500)
      this.playCardNextComputerPlayer()
    }
  }

}