let gameContainer = document.getElementById('game-board')
let pvcDisplay = document.getElementById('pvcDisplay')
let pvpDisplay = document.getElementById('pvpDisplay')
let modeSwitch = document.getElementById('mode-switch')

let createElement = (type, className, id, text, parent) => {
  let element = document.createElement(type)
  if (className) element.classList.add(className)
  if (id) element.setAttribute('id', id)
  if (text) element.innerHTML = text
  if (parent) parent.appendChild(element)
  return element
}

let displayBoard = () => {
  while (gameContainer.firstChild) gameContainer.removeChild(gameContainer.firstChild)
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      let piece = createElement('button', 'board-piece', i + '-' + j, '', gameContainer)
      piece.onclick = () => {
        select(piece.getAttribute('id'))
      }
    }
  }
}

modeSwitch.onchange = () => switchMode()

window.onload = () => {
  displayBoard()
  pvcDisplay.classList.toggle('active')
}