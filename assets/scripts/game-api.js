'use strict';

const app = require('./game/app');
const logic = require('./game/logic');
// const watcher = require('./game/watcher.js');

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

// const gameWatcher = watcher.resourceWatcher(app.host + '/games/:id/watch', {
//       Authorization: 'Token token=' + app.user.token
// });
//
// // gameWatcher.on('change', function (data) {
// //   console.log(data);
// //   if (data.game && data.game.cells) {
// //     const diff = changes => {
// //       let before = changes[0];
// //       let after = changes[1];
// //       for (let i = 0; i < after.length; i++) {
// //         if (before[i] !== after[i]) {
// //           return {
// //             index: i,
// //             value: after[i],
// //           };
// //         }
// //       }
// //
// //       return { index: -1, value: '' };
// //     };
// //
// //     let cell = diff(data.game.cells);
// //     $('#watch-index').val(cell.index);
// //     $('#watch-value').val(cell.value);
// //   } else if (data.timeout) { //not an error
// //     gameWatcher.close();
// //   }
// // });
// //
// // gameWatcher.on('error', function (e) {
// //   console.error('an error has occurred with the stream', e);
// // });

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
