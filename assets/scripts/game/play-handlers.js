'use strict';

const logic = require('./logic');
const ui = require('./ui');
const events = require('./events');
const gameOver = require('./game-over');

const play = function (cell) {
    logic.player = logic.isPlayerTurn();
    logic.setCellData(cell, logic.player);
    ui.setCell(cell, logic.player);
    events.onUpdateBoard(cell);
    if (logic.winCheck() || logic.tieCheck()) {
      gameOver();
      $('.board').children().off();
      logic.displayWinner();
      setTimeout(function () {
        logic.restartGameData();
        $('.board div').children().remove();
        $('.display-stats').html('');
        setUpHandlers();
        $('.board div').css("pointer-events", "none");
      }, 3000);
    } else {
      logic.turnSwitch();
    }
  };
//player is able to play their token in a cell. If there's a winner or a tie,
//the game restarts.

const setUpHandlers = function () {
  $('.board div').on('click', function () {
    let targetCell = $(this).attr('id');
    targetCell = parseFloat(targetCell);
    if (logic.isVacantCell(targetCell)) {
      play(targetCell);
    }
  });
};
//sets up event handlers on cells

module.exports = {
  play,
  setUpHandlers,
};
