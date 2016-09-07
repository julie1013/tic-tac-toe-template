
'use strict';

const events = require('./events');
const logic = require('./logic');

const drawBoard = function (array) {
  for (let i = 0; i < array.length; i++) {
    $('.board').append('<div id =' + i + '></div>');
    $('.board div').addClass('square').addClass('unoccupied');
  }
};
//sets up the board visually

const setCell = function (cell, player) {
  $('#' + cell).html('<img src = ../../assets/images/' + player + '.png style="width: 90px">').removeClass('unoccupied').removeClass('selected').addClass('occupied').off();
  logic.board[cell] = player;
};
//visually updates cell with player token

const restartGameUi = function () {
  $('.board').empty();
  drawBoard(logic.board);
  events.setUpHandlers();
};
//restarts game UI

const play = function (cell) {
    logic.player = logic.isPlayerTurn();
    setCell(cell, logic.player);
    if (logic.winCheck() || logic.tieCheck()) {
      $('.board').children().off();
      logic.scoreCounter(logic.player);
      setTimeout(function () {
        logic.restartGameData();
        restartGameUi();
      }, 3000);
    } else {
      logic.turnSwitch();
    }
  };
//player is able to play their token in a cell. If there's a winner or a tie,
//the game restarts.

module.exports = {
  drawBoard,
  setCell,
  restartGameUi,
  play,
};
