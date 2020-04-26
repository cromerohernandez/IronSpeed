class Message {
  constructor(text, time, type, player) {
    this.text = text
    this.time = time
    this.type = type
    this.player = player
  }

  showMessage() {
    let prevMessage = document.getElementById('popMessage')
    if (prevMessage) {
      setTimeout(() => {this.showMessage()}, 500)
    } else {
      this.addMessage()
      setTimeout(() => {this.deleteMessage()}, this.time)
    }
  }

  addMessage() {
    let screen = document.getElementById('screen')
    let popMessage = document.createElement('div')
    popMessage.setAttribute('id', 'popMessage')
    screen.appendChild(popMessage)
    if (this.type === 'winner') {
      let img = document.createElement('img')
      img.setAttribute('src', `images/LogoWinner${this.player}.png`)
      img.setAttribute('id', 'imgWinner')
      popMessage.appendChild(img)
    }
    let message = document.createElement('h1')
    message.innerText = this.text
    message.setAttribute('id', 'message')
    popMessage.appendChild(message)
  }

  deleteMessage() {
    let screen = document.getElementById('screen')
    let popMessage = document.getElementById('popMessage')
    if (popMessage) {
      screen.removeChild(popMessage)
    }
  }

}