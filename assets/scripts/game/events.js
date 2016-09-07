'use strict';

const logic = require('./logic');

const setUpHandlers = function(){
  $('.board div').on('click', function() {
    let targetCell = $(this).attr('id');
    targetCell = parseFloat(targetCell);
    if (logic.isVacantCell(targetCell)){
      logic.play(targetCell);
    }
  });
};
//sets up event handlers on cells

module.export = {
  setUpHandlers
};
