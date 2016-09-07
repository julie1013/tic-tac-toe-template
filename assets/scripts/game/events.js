'use strict';

const logic = require('./logic');
const ui = require('./ui');
// const api = require('./api');

const setUpHandlers = function () {
  $('.board div').on('click', function () {
    let targetCell = $(this).attr('id');
    targetCell = parseFloat(targetCell);
    if (logic.isVacantCell(targetCell)) {
      ui.play(targetCell);
    }
  });
};
//sets up event handlers on cells

module.exports = {
  setUpHandlers,
};
