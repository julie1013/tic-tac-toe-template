'use strict';
let player;
let board = [];
let whoseTurn = 0;
let winner;
let xScore = 0;
let oScore = 0;

const initializeBoard = function(){
  for (let i = 0; i < 9; i++){
    board.push(null);
  }
};
//sets up an array for the board

const isPlayerTurn = function(){
  if (whoseTurn === 0){
    player = 'x';
  } else {
    player = 'o';
  }
  return player;
};
//assigns turn to player

const turnSwitch = function(){
  if (whoseTurn === 1) {
    whoseTurn = 0;
  } else {
    whoseTurn = 1;
  }
};
//switches between turns

const isVacantCell = function(cell){
  return board[cell] === null;
};
//checks if cell is vacant

const horizontalWin = function(){
    if(board[0] !== null && board[0] === board[1] && board[0] === board[2]){
      winner = board[0];
    } else if (board[3] !== null && board[3] === board[4] && board[3] === board[5]){
      winner = board[3];
    } else if (board[6] !== null && board[6] === board[7] && board[6] === board[8]){
      winner = board[6];
    }
  return winner;
};
//checks for horizontal set up for possible win


const verticalWin = function(){
    if(board[0] !== null && board[0] === board[3] && board[0] === board[6]){
      winner = board[0];
    } else if (board[1] !== null && board[1] === board[4] && board[1] === board[7]){
      winner = board[1];
    } else if (board[2] !== null && board[2] === board[5] && board[2] === board[8]){
      winner = board[2];
    }
  return winner;
};
//checks for vertical setup for possible win

const diagonalWin = function(){
  if (board[4] !== null){
    if (board[4] === board[0] && board[4] === board[8] || board[4] === board[2] && board[4] === board[6]){
      winner = board[4];
    }
  }
  return winner;
};
//checks for diagonal setup for possible win

const winCheck = function(){
  return horizontalWin() || verticalWin() || diagonalWin();
};
//checks for a win condition

const tieCheck = function(){
  return ($('.occupied').length === 9);
};
//checks for a tie condition

const scoreCounter = function(){
  let winScore;
  if(winner === 'x'){
    winScore = xScore++;
  } else {
    winScore = oScore++;
  }
  return winScore;
};
//keeps track of wins

const restartGameData = function(){
  board = [];
  initializeBoard(board);
  whoseTurn = 0;
  winner = null;
};
//restarts game data




module.exports = {
  board,
  player,
  whoseTurn,
  xScore,
  oScore,
  initializeBoard,
  isPlayerTurn,
  turnSwitch,
  isVacantCell,
  horizontalWin,
  verticalWin,
  diagonalWin,
  winCheck,
  tieCheck,
  scoreCounter,
  restartGameData
};
