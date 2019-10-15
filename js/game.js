const canvas = document.getElementById("my-canvas")
canvas.height = window.innerHeight
canvas.width = window.innerHeight
const ctx = canvas.getContext("2d")

const game = new IronSpeed(ctx)
game.upground.run()

setTimeout(() => {game.dealCards()}, 3000)
let messageDeal = new Message ('Dealt cards', 3000)
setTimeout(() => {messageDeal.showMessage()}, 3000)
let messageStart = new Message ('Start PLAYER1', 2000)
setTimeout(() => {messageStart.showMessage()}, 6000)
setTimeout(() => {game.setStartTurn()}, 8000)