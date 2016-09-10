
'use strict';

const app = require('./app');
const logic = require('./logic');

const drawBoard = function (array) {
  for (let i = 0; i < array.length; i++) {
    $('.board').append('<div id =' + i + '></div>');
    $('.board div').addClass('square');
  }
};
//sets up the board visually


const setCell = function (cell, player) {
  $('#' + cell).html
    ('<img src = ../../assets/images/' + player + '.png style="width: 130px">')
      .off();
    logic.setCellData(cell, player);
};
//visually updates cell with player token

const displayWinner = function(){
  $('.display-winner').html(logic.winnerDeclare(logic.winner));
};

const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data, "You are signed up!");
  } else {
    console.log("Didn't work");
  }
};

const onSignInSuccess = function (data) {
    app.user = data.user;
    console.log("You are now signed in", data);
};

const onSignOutSuccess = function(){
  console.log("You are now signed out!");
  app.user = null;
};

const onChangePasswordSuccess = function(){
  console.log("Password successfully changed.");
};

const onError = function (response) {
  console.error(response);
};

const onNewGameSuccess = function(data){
  app.game = data.game;
  console.log(app.game);
};

const onGetGamesSuccess = function(data){
  app.games = data.game;
  console.log(data);
};

const onShowGameSuccess = function(data){
  console.log(data);
};

const onUpdateBoardSuccess = function(data){
  console.log(data, "Board is updated on server");
};

const onGamesPlayedSuccess = function(data){
  console.log("You've played " + data.games.length + " games so far!");
};

module.exports = {
  drawBoard,
  setCell,
  displayWinner,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onNewGameSuccess,
  onGetGamesSuccess,
  onShowGameSuccess,
  onUpdateBoardSuccess,
  onGamesPlayedSuccess,
  onError,
};
