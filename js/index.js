const menu = new Menu()

const canvas = document.getElementById("my-canvas")
canvas.height = window.innerHeight
canvas.width = window.innerHeight
const ctx = canvas.getContext("2d")

const game = new Game(ctx)

if (window.innerWidth < 1024) {
  menu.alertScreen()
}