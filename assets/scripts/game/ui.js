
'use strict';

const logic = require('./logic');

const drawBoard = function (array) {
  for (let i = 0; i < array.length; i++) {
    $('.board').append('<div id =' + i + '></div>');
    $('.board div').addClass('square');
  }
};
//sets up the board visually

const setCell = function (cell, player) {
  $('#' + cell).html('<img src = ../../assets/images/' + player + '.png style="width: 90px">').removeClass('unoccupied').removeClass('selected').addClass('occupied').off();
  logic.currentGame.game.cells[cell] = player;
};
//visually updates cell with player token

const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data);
  } else {
    console.log("Didn't work");
  }
};

const onError = function (response) {
  console.error(response);
};

module.exports = {
  drawBoard,
  setCell,
  onSignUpSuccess,
  onError,
};
