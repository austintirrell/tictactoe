let gameContainer = document.getElementById('game-board')

let createElement = (type, className, id, text, parent) => {
  let element = document.createElement(type)
  if (className) element.classList.add(className)
  if (id) element.setAttribute('id', id)
  if (text) element.innerHTML = text
  if (parent) parent.appendChild(element)
}

let displayBoard = () => {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      createElement('div', 'board-piece', i + '-' + j, '', gameContainer)
    }
  }
}

window.onload = () => {
  displayBoard()
}