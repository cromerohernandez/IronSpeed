class Menu {
  constructor() {
    this.body = document.body
  }

  removeMenu() {
    const menu = document.getElementById('menu')
    this.body.removeChild(menu)
  }

  home() {
    let menuCenter = document.getElementById('menu-center')
    if (menuCenter.hasChildNodes()) {
      while (menuCenter.childNodes.length >= 1) {
        menuCenter.removeChild(menuCenter.firstChild)
      }
    }
    menuCenter.setAttribute('class', 'menu-home')

    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }

    let instructionsButton = document.createElement('button')
    instructionsButton.setAttribute('id', 'menu-button')
    instructionsButton.setAttribute('class', 'instructions-button')
    instructionsButton.setAttribute('onclick', 'menu.instructions()')
    let playButton = document.createElement('button')
    playButton.setAttribute('id', 'menu-button')
    playButton.setAttribute('class', 'play-button')
    playButton.setAttribute('onclick', 'menu.selectComputerLevel()')

    menuCenter.appendChild(instructionsButton)
    menuCenter.appendChild(playButton)
  }

  instructions() {
    let menuCenter = document.getElementById('menu-center')
    if (menuCenter.hasChildNodes()) {
      while (menuCenter.childNodes.length >= 1) {
        menuCenter.removeChild(menuCenter.firstChild)
      }
    }
    menuCenter.setAttribute('class', 'menu-instructions')

    let menuBottom = document.getElementById('menu-bottom')

    let instructionsTitle = document.createElement('h1')
    instructionsTitle.setAttribute('id', 'instructions-title')
    instructionsTitle.innerHTML = "· INSTRUCTIONS ·"
    let instructions = document.createElement('div')
    instructions.setAttribute('id', 'instructions')
    const instruction1 = "<h2>Throw a card when it's your turn.</h2>"
    const instruction2 = "<h2>Duel: If you play a card that matches the symbol of another player's top card, be the first to  throw the disc. The loser of the duel takes both players' played cards.</h2>"
    const instruction3 = "<h2>If you make a mistake when throwing the disc, you must take all the cards currently in play.</h2>"
    const instructionSpecialColors = "<div id='specialCard-instruction'> <img/ src='images/SpecialColors.png' id='specialCard-instruction-img'> <h2>While this card is still exposed, duels are based on matching colors, and symbol duels do not apply.</h2> </div>"
    const instructionSpecialDiscs = "<div id='specialCard-instruction'> <img/ src='images/SpecialDiscs.png' id='specialCard-instruction-img'> <h2>All players must throw the disc. The slowest player must take all the cards currently in play.</h2> </div>"
    instructions.innerHTML = (instruction1 + instruction2 + instruction3 + instructionSpecialColors + instructionSpecialDiscs)
    let instructionWinner = document.createElement('h2')
    instructionWinner.innerText = "If you are the first to get rid of all your cards... ¡ YOU WIN !"

    menuCenter.appendChild(instructionsTitle)
    menuCenter.appendChild(instructions)
    menuCenter.appendChild(instructionWinner)

    let backButton = document.createElement('button')
    backButton.setAttribute('id', 'menu-button')
    backButton.setAttribute('class', 'back-button')
    backButton.setAttribute('onclick', 'menu.home()')

    menuBottom.appendChild(backButton)
  }

  selectComputerLevel() {
    let menuCenter = document.getElementById('menu-center')
    if (menuCenter.hasChildNodes()) {
      while (menuCenter.childNodes.length >= 1) {
        menuCenter.removeChild(menuCenter.firstChild)
      }
    }
    menuCenter.setAttribute('class', 'menu-selectComputerLevel')

    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }

    let titleSelectComputerLevel = document.createElement('h1')
    titleSelectComputerLevel.innerText = ("Select computer level")

    let panelComputerLevelButtons = document.createElement('div')
    panelComputerLevelButtons.setAttribute('id', 'panel-optionsButtons')

    let level1ComputerButton = document.createElement('button')
    level1ComputerButton.setAttribute('id', 'menu-button')
    level1ComputerButton.setAttribute('class', 'level1Computer-button')
    level1ComputerButton.setAttribute('onclick', 'menu.selectHumanPlayers(1)')

    let level2ComputerButton = document.createElement('button')
    level2ComputerButton.setAttribute('id', 'menu-button')
    level2ComputerButton.setAttribute('class', 'level2Computer-button')
    level2ComputerButton.setAttribute('onclick', 'menu.selectHumanPlayers(2)')

    let level3ComputerButton = document.createElement('button')
    level3ComputerButton.setAttribute('id', 'menu-button')
    level3ComputerButton.setAttribute('class', 'level3Computer-button')
    level3ComputerButton.setAttribute('onclick', 'menu.selectHumanPlayers(3)')

    panelComputerLevelButtons.appendChild(level1ComputerButton)
    panelComputerLevelButtons.appendChild(level2ComputerButton)
    panelComputerLevelButtons.appendChild(level3ComputerButton)

    menuCenter.appendChild(titleSelectComputerLevel)
    menuCenter.appendChild(panelComputerLevelButtons)

    let backButton = document.createElement('button')
    backButton.setAttribute('id', 'menu-button')
    backButton.setAttribute('class', 'back-button')
    backButton.setAttribute('onclick', 'menu.home()')

    menuBottom.appendChild(backButton)
  }

  selectHumanPlayers(levelComputer) {
    let menuCenter = document.getElementById('menu-center')
    if (menuCenter.hasChildNodes()) {
      while (menuCenter.childNodes.length >= 1) {
        menuCenter.removeChild(menuCenter.firstChild)
      }
    }
    menuCenter.setAttribute('class', 'menu-selectHumanPlayers')

    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }

    let titleSelectHumanPlayers = document.createElement('h1')
    titleSelectHumanPlayers.innerText = ('Select the number of human players')

    let panelHumanPlayerButtons = document.createElement('div')
    panelHumanPlayerButtons.setAttribute('id', 'panel-optionsButtons')

    let oneHumanPlayerButton = document.createElement('button')
    oneHumanPlayerButton.setAttribute('id', 'menu-button')
    oneHumanPlayerButton.setAttribute('class', 'oneHumanPlayers-button')
    oneHumanPlayerButton.setAttribute('onclick', `menu.controlsOneHumanPlayer(${levelComputer})`)

    let twoHumanPlayerButton = document.createElement('button')
    twoHumanPlayerButton.setAttribute('id', 'menu-button')
    twoHumanPlayerButton.setAttribute('class', 'twoHumanPlayers-button')
    twoHumanPlayerButton.setAttribute('onclick', `menu.controlsTwoHumanPlayers(${levelComputer})`)

    panelHumanPlayerButtons.appendChild(oneHumanPlayerButton)
    panelHumanPlayerButtons.appendChild(twoHumanPlayerButton)

    menuCenter.appendChild(titleSelectHumanPlayers)
    menuCenter.appendChild(panelHumanPlayerButtons)

    let backButton = document.createElement('button')
    backButton.setAttribute('id', 'menu-button')
    backButton.setAttribute('class', 'back-button')
    backButton.setAttribute('onclick', 'menu.selectComputerLevel()')

    menuBottom.appendChild(backButton)
  }

  controlsOneHumanPlayer(levelComputer) {
    let menuCenter = document.getElementById('menu-center')
    if (menuCenter.hasChildNodes()) {
      while (menuCenter.childNodes.length >= 1) {
        menuCenter.removeChild(menuCenter.firstChild)
      }
    }
    menuCenter.setAttribute('class', 'menu-schema')

    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }

    let schema = document.createElement('div')
    schema.setAttribute('id', 'schema')

    let boardSchema1HumanPlayer = document.createElement('img')
    boardSchema1HumanPlayer.setAttribute('id', 'board-schema')
    boardSchema1HumanPlayer.setAttribute('src', 'images/MenuSchema1HumanPlayer.png')
    boardSchema1HumanPlayer.setAttribute('alt', 'BoardSchema1HumanPlayer')

    let controlsPlayer2 = document.createElement('div')
    controlsPlayer2.setAttribute('id', 'controls-player')
    let player2Title = document.createElement('h2')
    player2Title.innerText = ("· PLAYER 2 ·")
    let keysPlayer2 = document.createElement('div')
    keysPlayer2.setAttribute('id', 'keys-player')
    const cardKey2 = "<div id='key'> <img src='images/keyDown.png' id='key-img'> <h2>Throw a card</h2> </div>"
    const discKey2 = "<div id='key'> <img src='images/keyRight.png' id='key-img'> <h2>Throw the disc</h2> </div>"
    keysPlayer2.innerHTML = (cardKey2 + discKey2)
    controlsPlayer2.appendChild(player2Title)
    controlsPlayer2.appendChild(keysPlayer2)

    schema.appendChild(boardSchema1HumanPlayer)
    schema.appendChild(controlsPlayer2)

    menuCenter.appendChild(schema)

    let butonPanel = document.createElement('div')
    schema.setAttribute('id', 'button-panel')
    let backButton = document.createElement('button')
    backButton.setAttribute('id', 'menu-button')
    backButton.setAttribute('class', 'back-button')
    backButton.setAttribute('onclick', 'menu.selectHumanPlayers()')
    let playButton = document.createElement('button')
    playButton.setAttribute('id', 'menu-button')
    playButton.setAttribute('class', 'play-button')
    playButton.setAttribute('onclick', `menu.startOneHumanPlayer(${levelComputer})`)
    butonPanel.appendChild(backButton)
    butonPanel.appendChild(playButton)

    menuBottom.appendChild(butonPanel)
  }

  controlsTwoHumanPlayers(levelComputer) {
    let menuCenter = document.getElementById('menu-center')
    if (menuCenter.hasChildNodes()) {
      while (menuCenter.childNodes.length >= 1) {
        menuCenter.removeChild(menuCenter.firstChild)
      }
    }
    menuCenter.setAttribute('class', 'menu-schema')

    let menuBottom = document.getElementById('menu-bottom')
    if (menuBottom.hasChildNodes()) {
      while (menuBottom.childNodes.length >= 1) {
        menuBottom.removeChild(menuBottom.firstChild)
      }
    }

    let schema = document.createElement('div')
    schema.setAttribute('id', 'schema')

    let controlsPlayer1 = document.createElement('div')
    controlsPlayer1.setAttribute('id', 'controls-player')
    let player1Title = document.createElement('h2')
    player1Title.innerText = ("· PLAYER 1 ·")
    let keysPlayer1 = document.createElement('div')
    keysPlayer1.setAttribute('id', 'keys-player')
    const cardKey1 = "<div id='key'> <img src='images/keyZ.png' id='key-img'> <h2>Throw a card</h2> </div>"
    const discKey1 = "<div id='key'> <img src='images/keyX.png' id='key-img'> <h2>Throw the disc</h2> </div>"
    keysPlayer1.innerHTML = (cardKey1 + discKey1)
    controlsPlayer1.appendChild(player1Title)
    controlsPlayer1.appendChild(keysPlayer1)

    let boardSchema2HumanPlayers = document.createElement('img')
    boardSchema2HumanPlayers.setAttribute('id', 'board-schema')
    boardSchema2HumanPlayers.setAttribute('src', 'images/MenuSchema2HumanPlayers.png')
    boardSchema2HumanPlayers.setAttribute('alt', 'BoardSchema1HumanPlayer')

    let controlsPlayer3 = document.createElement('div')
    controlsPlayer3.setAttribute('id', 'controls-player')
    let player3Title = document.createElement('h2')
    player3Title.innerText = ("· PLAYER 3 ·")
    let keysPlayer3 = document.createElement('div')
    keysPlayer3.setAttribute('id', 'keys-player')
    const cardKey3 = "<div id='key'> <img src='images/keyDown.png' id='key-img'> <h2>Throw a card</h2> </div>"
    const discKey3 = "<div id='key'> <img src='images/keyRight.png' id='key-img'> <h2>Throw the disc</h2> </div>"
    keysPlayer3.innerHTML = (cardKey3 + discKey3)
    controlsPlayer3.appendChild(player3Title)
    controlsPlayer3.appendChild(keysPlayer3)

    schema.appendChild(controlsPlayer1)
    schema.appendChild(boardSchema2HumanPlayers)
    schema.appendChild(controlsPlayer3)

    menuCenter.appendChild(schema)

    let butonPanel = document.createElement('div')
    schema.setAttribute('id', 'button-panel')
    let backButton = document.createElement('button')
    backButton.setAttribute('id', 'menu-button')
    backButton.setAttribute('class', 'back-button')
    backButton.setAttribute('onclick', 'menu.selectHumanPlayers()')
    let playButton = document.createElement('button')
    playButton.setAttribute('id', 'menu-button')
    playButton.setAttribute('class', 'play-button')
    playButton.setAttribute('onclick', `menu.startTwoHumanPlayers(${levelComputer})`)
    butonPanel.appendChild(backButton)
    butonPanel.appendChild(playButton)

    menuBottom.appendChild(butonPanel)
  }

  board() {
    let board = document.getElementById('preBoard')
    board.setAttribute('id', 'board')

    let boardPlay = document.createElement('div')
    boardPlay.setAttribute('id', 'board')
    let boardTop = document.createElement('div')
    boardTop.setAttribute('id', 'board-top')
    const boardTopHTML = "<div id='cardCenter4'> <h3 id='counterCards4'>0</h3> </div>"
    boardTop.innerHTML = boardTopHTML
    let boardMiddle = document.createElement('div')
    boardMiddle.setAttribute('id', 'board-middle')
    let boardLeft = document.createElement('div')
    boardLeft.setAttribute('id', 'board-left')
    const boardLeftHTML = "<div id='cardCenter1'> <h3 id='counterCards1'>0</h3> </div>"
    boardLeft.innerHTML = boardLeftHTML
    let boardCenter = document.createElement('div')
    boardCenter.setAttribute('id', 'board-center')
    const boardCenterHTML = "<img src='images/IronSpeed-LogoLine.png' alt='IronSpeedLogoLine' id='logo-center'>"
    boardCenter.innerHTML = boardCenterHTML
    let boardRight = document.createElement('div')
    boardRight.setAttribute('id', 'board-right')
    const boardRightHTML = "<div id='cardCenter3'> <h3 id='counterCards3'>0</h3> </div>"
    boardRight.innerHTML = boardRightHTML
    boardMiddle.appendChild(boardLeft)
    boardMiddle.appendChild(boardCenter)
    boardMiddle.appendChild(boardRight)
    let boardBottom = document.createElement('div')
    boardBottom.setAttribute('id', 'board-bottom')
    const boardBottomHTML = "<div id='cardCenter2'> <h3 id='counterCards2'>0</h3> </div>"
    boardBottom.innerHTML = boardBottomHTML
    boardPlay.appendChild(boardTop)
    boardPlay.appendChild(boardMiddle)
    boardPlay.appendChild(boardBottom)

    board.appendChild(boardPlay)

    let returnHome = document.getElementById('return-home')

    let homeButton = document.createElement('button')
    homeButton.setAttribute('id', 'menu-button')
    homeButton.setAttribute('class', 'home-button')
    homeButton.setAttribute('onclick', `location.reload()`)

    returnHome.appendChild(homeButton)
  }

  startOneHumanPlayer(levelComputer) {
    this.removeMenu()
    this.board()
    game.start(1, levelComputer)
  }

  startTwoHumanPlayers(levelComputer) {
    this.removeMenu()
    this.board()
    game.start(2, levelComputer)
  }

  alertScreen() {
    let canvas = document.getElementById('my-canvas')
    let menu = document.getElementById('menu')

    this.body.removeChild(canvas)
    this.body.removeChild(menu)

    let messageViewer = document.getElementById('messageViewer')
    messageViewer.setAttribute('id', 'alertMessage')

    let logoMenu = document.createElement('img')
    logoMenu.setAttribute('id', 'logo-alert')
    logoMenu.setAttribute('src', 'images/IronSpeed-LogoLineLight.png')
    logoMenu.setAttribute('alt', 'logoMenu')

    let alertMessageTitle = document.createElement('h1')
    alertMessageTitle.innerText = "Sorry!"
    alertMessageTitle.setAttribute('class', 'alertText')

    let alertMessage1 = document.createElement('h1')
    alertMessage1.innerText = "IronSpeed ​​is not yet available for smartphone or tablet."
    alertMessage1.setAttribute('class', 'alertText')

    let alertMessage2 = document.createElement('h1')
    alertMessage2.innerText = "You can play it on your computer."
    alertMessage2.setAttribute('class', 'alertText')

    messageViewer.appendChild(logoMenu)
    messageViewer.appendChild(alertMessageTitle)
    messageViewer.appendChild(alertMessage1)
    messageViewer.appendChild(alertMessage2)
  }
}