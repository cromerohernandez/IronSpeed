const canvas = document.getElementById("my-canvas")
const ctx = canvas.getContext("2d")

const game = new IronSpeed(ctx)
game.upground.run()
game.dealCards()
