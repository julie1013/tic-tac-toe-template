
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

const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data, "You are signed up!");
  } else {
    console.log("Didn't work");
  }
};

const onSignInSuccess = function (data) {
    $('show-x').html('0');
    $('.show-o').html('0');
    app.user = data.user;
    console.log("You are now signed in", data);
};

const onSignOutSuccess = function(){
  $('.show-x').html('0');
  $('.show-o').html('0');
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
  $('.board div').css("pointer-events", "auto");
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
  $('.display-stats').html("You've played " + data.games.length + " games so far!");
};

module.exports = {
  drawBoard,
  setCell,
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
