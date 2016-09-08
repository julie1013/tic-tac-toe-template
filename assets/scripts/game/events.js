'use strict';

const playHandlers = require('./play-handlers');
const api = require('../../scripts/game-api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

playHandlers.setUpHandlers();

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.onSignUpSuccess)
    .fail(ui.onError);
};

module.exports = {
  onSignUp,
};
