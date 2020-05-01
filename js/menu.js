class Menu {
  constructor() {
    this.body = document.body
  }

  home() {
    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }
    menuBottom.setAttribute('class', 'menu-home')

    let instructionsButton = document.createElement('button')
    instructionsButton.setAttribute('id', 'menu-button')
    instructionsButton.setAttribute('class', 'instructions-button')
    instructionsButton.setAttribute('onclick', 'menu.instructions()')
    let playButton = document.createElement('button')
    playButton.setAttribute('id', 'menu-button')
    playButton.setAttribute('class', 'play-button')
    playButton.setAttribute('onclick', 'menu.selectHumanPlayers()')

    menuBottom.appendChild(instructionsButton)
    menuBottom.appendChild(playButton)
  }

  instructions() {
    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }
    menuBottom.setAttribute('class', 'menu-instructions')

    let instructionsTitle = document.createElement('h1')
    instructionsTitle.setAttribute('id', 'instructions-title')
    instructionsTitle.innerHTML = "· INSTRUCTIONS ·"
    let instructions = document.createElement('div')
    instructions.setAttribute('id', 'instructions')
    const instruction1 = "<h2>Throw a card when it's your turn.</h2>"
    const instruction2 = "<h2>Duel: If you play a card that matches the symbol of another player's top card, be the first to  throw the disc. The loser of the duel takes both players' played cards.</h2>"
    const instruction3 = "<h2>If you make a mistake when throwing the disc, you must take all the cards currently in play.</h2>"
    const instructionSpecialColors = "<div id='specialCard-instruction'><img/ src='images/SpecialColors.png' id='specialCard-instruction-img'><h2>While this card is still exposed, duels are based on matching colors, and symbol duels do not apply.</h2></div>"
    const instructionSpecialDiscs = "<div id='specialCard-instruction'><img/ src='images/SpecialDiscs.png' id='specialCard-instruction-img'><h2>All players must throw the disc. The slowest player must take all the cards currently in play.</h2></div>"
    instructions.innerHTML = (instruction1 + instruction2 + instruction3 + instructionSpecialColors + instructionSpecialDiscs)
    let instructionWinner = document.createElement('h2')
    instructionWinner.innerText = "If you are the first to get rid of all your cards... ¡ YOU WIN !"
    let backButton = document.createElement('button')
    backButton.setAttribute('id', 'menu-button')
    backButton.setAttribute('class', 'back-button')
    backButton.setAttribute('onclick', 'menu.home()')

    menuBottom.appendChild(instructionsTitle)
    menuBottom.appendChild(instructions)
    menuBottom.appendChild(instructionWinner)
    menuBottom.appendChild(backButton)
  }

  selectHumanPlayers() {
    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }
    menuBottom.setAttribute('class', 'menu-selectHumanPlayers')

    let oneHumanPlayerButton = document.createElement('button')
    oneHumanPlayerButton.setAttribute('id', 'menu-button')
    oneHumanPlayerButton.setAttribute('class', 'oneHumanPlayers-button')
    oneHumanPlayerButton.setAttribute('onclick', `game.start(${1})`)
    let twoHumanPlayerButton = document.createElement('button')
    twoHumanPlayerButton.setAttribute('id', 'menu-button')
    twoHumanPlayerButton.setAttribute('class', 'twoHumanPlayers-button')
    twoHumanPlayerButton.setAttribute('onclick', `game.start(${2})`)  

    menuBottom.appendChild(oneHumanPlayerButton)
    menuBottom.appendChild(twoHumanPlayerButton)
  }

  board() {
    let menu = document.getElementById('menu')
    document.body.removeChild(menu)

    let z = document.getElementById('board-toPlay')
    z.setAttribute('id', 'board')

    let boardPlay = document.createElement('div')
    boardPlay.setAttribute('id', 'board')
    let boardTop = document.createElement('div')
    boardTop.setAttribute('id', 'board-top')
    const boardTopHTML = "<div id='cardCenter4'><h3 id='counterCards4'>0</h3></div>"
    boardTop.innerHTML = boardTopHTML
    let boardMiddle = document.createElement('div')
    boardMiddle.setAttribute('id', 'board-middle')
    let boardLeft = document.createElement('div')
    boardLeft.setAttribute('id', 'board-left')
    const boardLeftHTML = "<div id='cardCenter1'><h3 id='counterCards1'>0</h3></div>"
    boardLeft.innerHTML = boardLeftHTML
    let boardCenter = document.createElement('div')
    boardCenter.setAttribute('id', 'board-center')
    const boardCenterHTML = "<img src='images/IronSpeed-LogoLine.png' alt='IronSpeedLogoLine' id='logo-center'>"
    boardCenter.innerHTML = boardCenterHTML
    let boardRight = document.createElement('div')
    boardRight.setAttribute('id', 'board-right')
    const boardRightHTML = "<div id='cardCenter3'><h3 id='counterCards3'>0</h3></div>"
    boardRight.innerHTML = boardRightHTML
    boardMiddle.appendChild(boardLeft)
    boardMiddle.appendChild(boardCenter)
    boardMiddle.appendChild(boardRight)
    let boardBottom = document.createElement('div')
    boardBottom.setAttribute('id', 'board-bottom')
    const boardBottomHTML = "<div id='cardCenter2'><h3 id='counterCards2'>0</h3></div>"
    boardBottom.innerHTML = boardBottomHTML
    boardPlay.appendChild(boardTop)
    boardPlay.appendChild(boardMiddle)
    boardPlay.appendChild(boardBottom)

    z.appendChild(boardPlay)
  }
}