'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('../game-api');
const ui = require('./ui');
const logic = require('./logic');

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
  logic.xScore = 0;
  logic.oScore = 0;
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onError);
    console.log(logic.xScore, logic.oScore);
};

const onSignOut = function(event){
  event.preventDefault();
  logic.xScore = 0;
  logic.oScore = 0;
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

const onShowGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showGame(data)
    .done(ui.onShowGameSuccess)
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
  onShowGame,
  onUpdateBoard,
  onGamesPlayed,
};
