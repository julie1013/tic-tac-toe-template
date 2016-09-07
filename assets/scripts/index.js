'use strict';

const events = require('./game/events');
const logic = require('./game/logic');
const ui = require('./game/ui');

$(document).ready(function () {
  logic.initializeBoard();
  ui.drawBoard(logic.board);
  events.setUpHandlers();
});
