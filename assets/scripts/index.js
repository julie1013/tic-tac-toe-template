'use strict';

const playHandlers = require('./game/play-handlers');
const logic = require('./game/logic');
const ui = require('./game/ui');

$(document).ready(function () {
  logic.initializeBoard();
  ui.drawBoard(logic.currentGame.game.cells);
  playHandlers.setUpHandlers();
});
