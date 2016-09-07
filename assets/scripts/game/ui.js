
'use strict';

const logic = require('./logic');

const drawBoard = function (array) {
  for (let i = 0; i < array.length; i++) {
    $('.board').append('<div id =' + i + '></div>');
    $('.board div').addClass('square').addClass('unoccupied');
  }
};
//sets up the board visually

const setCell = function (cell, player) {
  $('#' + cell).html('<img src = ../../assets/images/' + player + '.png style="width: 90px">').removeClass('unoccupied').removeClass('selected').addClass('occupied').off();
  logic.currentGame.game.cells[cell] = player;
};
//visually updates cell with player token

module.exports = {
  drawBoard,
  setCell,
};
