let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

let player = 'x'
let computer = 'o'
let draw = 'c'
let mode = 'Player vs Computer'
let turn = player

let checkForWinOrDraw = () => {
  //check rows
  for (i = 0; i < board.length; i++) {
    if (board[i][0] == player &&
      board[i][1] == player &&
      board[i][2] == player) {
      return player
    }
    else if (board[i][0] == computer &&
      board[i][1] == computer &&
      board[i][2] == computer) {
      return computer
    }
  }
  //check columns
  for (i = 0; i < board.length; i++) {
    if (board[0][i] == player &&
      board[1][i] == player &&
      board[2][i] == player) {
      return player
    }
    else if (board[0][i] == computer &&
      board[1][i] == computer &&
      board[2][i] == computer) {
      return computer
    }
  }
  //check diagonals
  if (board[0][0] == player &&
    board[1][1] == player &&
    board[2][2] == player ||
    board[0][2] == player &&
    board[1][1] == player &&
    board[2][0] == player) {
    return player
  }
  else if (board[0][0] == computer &&
    board[1][1] == computer &&
    board[2][2] == computer ||
    board[0][2] == computer &&
    board[1][1] == computer &&
    board[2][0] == computer) {
    return computer
  }

  let checkForDraw = true
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] == '') {
        checkForDraw = false
      }
    }
  }
  if (checkForDraw) return draw
  
  //game isn't finished
  return false
}

let select = (coords) => {
  let boardPiece = document.getElementById(coords)
  if (boardPiece.innerText == '') {
    let row = coords.split('-')[0]
    let column = coords.split('-')[1]

    board[row][column] = turn
    boardPiece.innerText = turn
    board[row][column] = turn

    let outcome = checkForWinOrDraw()
    if (outcome) {
      if (outcome == player) alert('Player wins!')
      if (outcome == computer) alert('Computer wins!')
      if (outcome == draw) alert('Draw!')
      resetGame()
    }

    if (mode == 'Player vs Computer') {
      if (turn == player) turn = computer
      else turn = player
    } else if (mode == 'Player vs Computer') computerSelect()
  }
}

let switchMode = () => {
  if (mode == 'Player vs Computer') mode = 'Player vs Player'
  else mode = 'Player vs Computer'

  pvcDisplay.classList.toggle('active')
  pvpDisplay.classList.toggle('active')
}

let resetGame = () => {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  turn = player
  displayBoard()
}