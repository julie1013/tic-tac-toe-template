
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
    ('<img src = assets/images/' + player + '.png style="width: 130px" class="token">')
      .off();
    logic.setCellData(cell, player);
};
//visually updates cell with player token

const onSignUpSuccess = function (data) {
  if (data) {
    $('.display-stats').html('You are now signed up! Now go sign in!');
  }
};

const onSignInSuccess = function (data) {
    app.user = data.user;
    $('.display-stats').html('You are now signed in!');
    $('#sign-out').show();
    $('#change-password').show();
    $('#get-games').show();
    $('#new-game').show();
};

const onSignOutSuccess = function(){
  $('.display-stats').html('Bye!');
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#get-games').hide();
  $('#new-game').hide();
  app.user = null;
};

const onChangePasswordSuccess = function(){
  $('.display-stats').html("Password successfully changed.");
};

const onError = function (response) {
  $('.display-stats').html(response);
};


const onNewGameSuccess = function(data){
  app.game = data.game;
  $('.board div').css("pointer-events", "auto");
  $('.display-stats').html('');
};

const onGetGamesSuccess = function(data){
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
  onError,
};
