'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('../game-api');
const ui = require('./ui');

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.onSignUpSuccess)
    .fail(ui.onError);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  $('#sign-in').hide();
  $('#sign-up').hide();
  $('#sign-out').show();
  $('#change-password').show();
  $('#get-games').show();
  $('#get-game').show();
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onError);
};

const onSignOut = function(event){
  event.preventDefault();
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#get-games').hide();
  $('#get-game').hide();
  $('#total-games-played').hide();
  $('#sign-in').show();
  $('#sign-up').show();
    api.signOut()
    .done(ui.onSignOutSuccess)
    .fail(ui.onError);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.onChangePasswordSuccess)
    .fail(ui.onError);
};

const onNewGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.newGame(data)
    .done(ui.onNewGameSuccess)
    .fail(ui.onError);
};

const onGetGames = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.getGames(data)
    .done(ui.onGetGamesSuccess)
    .fail(ui.onError);
};

const onUpdateBoard = function (cell) {
  api.updateBoard(cell)
  .done(ui.onUpdateBoardSuccess)
  .fail(ui.onError);
};

const onGamesPlayed = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.gamesPlayed(data)
    .done(ui.onGamesPlayedSuccess)
    .fail(ui.onError);
};


module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onNewGame,
  onGetGames,
  onUpdateBoard,
  onGamesPlayed,
};
