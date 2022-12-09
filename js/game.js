let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

let player = 'X'
let computer = 'O'

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
  //check for draw
  let draw = true
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] == '') {
        draw = false
      }
    }
  }
  if (draw) return 'C'

  return false
}