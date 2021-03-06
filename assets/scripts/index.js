'use strict';

const playHandlers = require('./game/play-handlers');
const logic = require('./game/logic');
const ui = require('./game/ui');
const events = require('./game/events');

$(document).ready(function () {
  logic.initializeBoard();
  ui.drawBoard(logic.currentGame.game.cells);
  playHandlers.setUpHandlers();
  $('.board div').css("pointer-events", "none");
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#get-games').hide();
  $('#new-game').hide();
  $('#sign-up').on('submit', events.onSignUp);
  $('#sign-in').on('submit', events.onSignIn);
  $('#sign-out').on('submit', events.onSignOut);
  $('#change-password').on('submit', events.onChangePassword);
  $('#get-games').on('submit', events.onGetGames);
  $('#new-game').on('submit', events.onNewGame);
});
