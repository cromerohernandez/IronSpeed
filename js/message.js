class Message {
  constructor(text, time) {
    this.text = text
    this.time = time
  }

  showMessage() {
    let prevMessage = document.getElementById('popMessage')
    if (prevMessage) {
      setTimeout(() => {this.showMessage()}, 1000)
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