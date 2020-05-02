class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.game = []
  }

  start(humanPlayers, levelComputer) {
    let ironSpeed

    switch(levelComputer) {
      case 1:
        ironSpeed = new IronSpeed(this.ctx, humanPlayers, RESPONSE_TIME_COMPUTER_LEVEL1, ERROR_DISC_COMPUTER_LEVEL1)
        console.log(`GAME · ComputerLevel:${levelComputer} HumanPlayers:${humanPlayers}`)
        break;
      case 2:
        ironSpeed = new IronSpeed(this.ctx, humanPlayers, RESPONSE_TIME_COMPUTER_LEVEL2, ERROR_DISC_COMPUTER_LEVEL2)
        console.log(`GAME · ComputerLevel:${levelComputer} HumanPlayers:${humanPlayers}`)
        break;
      case 3:
        ironSpeed = new IronSpeed(this.ctx, humanPlayers, RESPONSE_TIME_COMPUTER_LEVEL3, ERROR_DISC_COMPUTER_LEVEL3)
        console.log(`GAME · ComputerLevel:${levelComputer} HumanPlayers:${humanPlayers}`)
        break;
      default:
        console.log('Error level computer')
    }
    
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