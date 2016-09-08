'use strict';

const playHandlers = require('./game/play-handlers');
const logic = require('./game/logic');
const ui = require('./game/ui');
const events = require('./game/events');

$(document).ready(function () {
  logic.initializeBoard();
  ui.drawBoard(logic.currentGame.game.cells);
  playHandlers.setUpHandlers();
  $('#sign-up').on('submit', events.onSignUp);
  $('#sign-in').on('submit', events.onSignIn);
  $('#change-password').on('submit', events.onChangePassword);
});
