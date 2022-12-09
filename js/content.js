let gameContainer = document.getElementById('game-board')
let pvcDisplay = document.getElementById('pvcDisplay')
let pvpDisplay = document.getElementById('pvpDisplay')
let modeSwitch = document.getElementById('mode-switch')
let gameOverContainer = document.getElementById('game-over')
let gameOverText = document.getElementById('game-over-text')
let playAgainBtn = document.getElementById('play-again')

modeSwitch.onchange = () => switchMode()
playAgainBtn.onclick = () => {
  resetGame()
  gameOverContainer.classList.remove('active')
}

let createElement = (type, className, id, parent) => {
  let element = document.createElement(type)
  if (className) element.classList.add(className)
  if (id) element.setAttribute('id', id)
  if (parent) parent.appendChild(element)
  return element
}

let displayBoard = () => {
  while (gameContainer.firstChild) gameContainer.removeChild(gameContainer.firstChild)
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      let piece = createElement('button', 'board-piece', i + '-' + j, gameContainer)
      piece.onclick = () => {
        select(piece)
      }
    }
  }
}

let gameOver = (text) => {
  gameOverContainer.classList.add('active')
  gameOverText.innerText = text
}

window.onload = () => {
  displayBoard()
  pvcDisplay.classList.toggle('active')
}