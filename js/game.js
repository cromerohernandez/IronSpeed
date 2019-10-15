const canvas = document.getElementById("my-canvas")
canvas.height = window.innerHeight
canvas.width = window.innerHeight
const ctx = canvas.getContext("2d")

const game = new IronSpeed(ctx)
game.upground.run()

setTimeout(() => {game.dealCards()}, 5000)
let messageDeal = new Message ('Dealt cards', 2000)
setTimeout(() => {messageDeal.showMessage()}, 5000)
let messageStart = new Message ('Start PLAYER1', 2000)
setTimeout(() => {messageStart.showMessage()}, 7000)
setTimeout(() => {game.setStartTurn()}, 9000)