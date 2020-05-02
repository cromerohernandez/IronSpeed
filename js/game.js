class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.game = []
  }

  start(humanPlayers) {
    const ironSpeed = new IronSpeed(this.ctx, humanPlayers)
    this.game = ironSpeed
    ironSpeed.upground.run()

    setTimeout(() => {ironSpeed.dealCards()}, 2000)
    let messageDeal = new Message ('Dealt cards', 2000)
    setTimeout(() => {messageDeal.showMessage()}, 2000)
    let messageStart = new Message ('Start PLAYER1', 2000)
    setTimeout(() => {messageStart.showMessage()}, 4000)
    setTimeout(() => {ironSpeed.setStartTurn()}, 6000)
  }

}