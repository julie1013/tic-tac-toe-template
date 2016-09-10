'use strict';

const app = require('./game/app');
const logic = require('./game/logic');

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = function(data) {
  return  $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const signOut = function() {
  let id = app.user.id;
  return  $.ajax({
    url: app.host + '/sign-out/' + id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function(data){
  let id = app.user.id;
  return  $.ajax({
    url: app.host + '/change-password/' + id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

const getGames = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const newGame = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showGame = function () {
  let gameID = $('#gameID').val();
  return $.ajax({
    url: app.host + '/games/' + gameID,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateBoard = function (cell) {
  let cellVal = logic.currentGame.game.cells[cell];
  let gameID = app.game.id;
  return  $.ajax({
    url: app.host + '/games/' + gameID,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
        "game": {
          "cell": {
            "index": cell,
            "value": cellVal
          },
          "over": false
        }
      }
  });
};


const gamesWon = function () {
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
  getGames,
  showGame,
  updateBoard,
  gamesWon,
};
