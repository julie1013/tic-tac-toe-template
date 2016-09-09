'use strict';

const logic = require('./logic');
const ui = require('./ui');

const play = function (cell) {
    logic.player = logic.isPlayerTurn();
    ui.setCell(cell, logic.player);
    console.log(logic.currentGame.game.cells);
    if (logic.winCheck() || logic.tieCheck()) {
      $('.board').children().off();
      logic.currentGame.game.over = true;
      logic.scoreCounter();
      setTimeout(function () {
        console.log(logic.currentGame.game.cells);
        logic.restartGameData();
        $('.board div').children().remove();
        setUpHandlers();
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
