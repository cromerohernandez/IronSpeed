/*const canvas = document.getElementById("my-canvas")
canvas.height = window.innerHeight
canvas.width = window.innerHeight
const ctx = canvas.getContext("2d")

const game = new IronSpeed(ctx, 2)
game.upground.run()

setTimeout(() => {game.dealCards()}, 2000)
let messageDeal = new Message ('Dealt cards', 2000)
setTimeout(() => {messageDeal.showMessage()}, 2000)
let messageStart = new Message ('Start PLAYER1', 2000)
setTimeout(() => {messageStart.showMessage()}, 4000)
setTimeout(() => {game.setStartTurn()}, 6000)*/


class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.game = []
  }

  start() {
    board.gameBoard()

    const ironSpeed = new IronSpeed(this.ctx, 2)
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