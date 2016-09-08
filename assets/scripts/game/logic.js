'use strict';
let player;
let whoseTurn = 0;
let winner;
let xScore = 0;
let oScore = 0;

let currentGame = {
  game: {
    id: "",
    cells:"",
    over: false,
    player_x : {
      id: "",
      email: ""
    },
    player_o: {
      id: "",
      email: ""
    }
  },
};

const initializeBoard = function () {
  currentGame.game.cells = [];
  for (let i = 0; i < 9; i++) {
    currentGame.game.cells.push("");
  }
  console.log(currentGame.game.cells);
};
//sets up an array for the board

const isPlayerTurn = function () {
  if (whoseTurn === 0) {
    player = 'x';
  } else {
    player = 'o';
  }

  return player;
};
//assigns turn to player

const turnSwitch = function () {
  if (whoseTurn === 1) {
    whoseTurn = 0;
  } else {
    whoseTurn = 1;
  }
};
//switches between turns

const isVacantCell = function (cell) {
  return currentGame.game.cells[cell] === "";
};
//checks if cell is vacant

const horizontalWin = function () {
    if (currentGame.game.cells[0] !== "" &&
        currentGame.game.cells[0] === currentGame.game.cells[1] &&
        currentGame.game.cells[0] === currentGame.game.cells[2]) {
      winner = currentGame.game.cells[0];
      console.log(winner, "horizontal win");
    } else if (currentGame.game.cells[3] !== "" &&
              currentGame.game.cells[3] === currentGame.game.cells[4] &&
              currentGame.game.cells[3] === currentGame.game.cells[5]) {
      winner = currentGame.game.cells[3];
      console.log(winner, "horizontal win");
    } else if (currentGame.game.cells[6] !== "" &&
              currentGame.game.cells[6] === currentGame.game.cells[7] &&
              currentGame.game.cells[6] === currentGame.game.cells[8]) {
      winner = currentGame.game.cells[6];
      console.log(winner, "horizontal win");
    }
    return winner;
  };
//checks for horizontal set up for possible win

const verticalWin = function () {
    if (currentGame.game.cells[0] !== "" &&
        currentGame.game.cells[0] === currentGame.game.cells[3] &&
        currentGame.game.cells[0] === currentGame.game.cells[6]) {
      winner = currentGame.game.cells[0];
      console.log(winner, "vertical win");
    } else if (currentGame.game.cells[1] !== "" &&
      currentGame.game.cells[1] === currentGame.game.cells[4] &&
      currentGame.game.cells[1] === currentGame.game.cells[7]) {
      winner = currentGame.game.cells[1];
      console.log(winner, "vertical win");
    } else if (currentGame.game.cells[2] !== "" &&
              currentGame.game.cells[2] === currentGame.game.cells[5] &&
              currentGame.game.cells[2] === currentGame.game.cells[8]) {
      winner = currentGame.game.cells[2];
      console.log(winner, "vertical win");
    }
    return winner;
  };
//checks for vertical setup for possible win

const diagonalWin = function () {
  if (currentGame.game.cells[4] !== "") {
    if (currentGame.game.cells[4] === currentGame.game.cells[0] &&
      currentGame.game.cells[4] === currentGame.game.cells[8] ||
      currentGame.game.cells[4] === currentGame.game.cells[2] &&
      currentGame.game.cells[4] === currentGame.game.cells[6]) {
      winner = currentGame.game.cells[4];
      console.log(winner, "diagonal win");
    }
  }
  return winner;
};
//checks for diagonal setup for possible win

const winCheck = function () {
  return horizontalWin() || verticalWin() || diagonalWin();
};
//checks for a win condition

const tieCheck = function () {
  return ($('.occupied').length === 9);
};
//checks for a tie condition

const scoreCounter = function () {
  if (winner === 'x') {
    xScore++;
    console.log("x has", xScore + " points");
    return xScore;
  } else {
    oScore++;
    console.log("o has", oScore + " points");
    return oScore;
  }
};
//keeps track of wins

const restartGameData = function () {
  currentGame.game.cells.splice(0, currentGame.game.cells.length);
  currentGame.game.over = false;
  initializeBoard(currentGame.game.cells);
  whoseTurn = 0;
  winner = null;
};
//restarts game data

module.exports = {
  currentGame,
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
  restartGameData,
};
