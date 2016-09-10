'use strict';

const app = require('./app');

const gameOverUpdate = function() {
    return $.ajax({
      url: app.host + '/games/' + app.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + app.user.token
      },
      data: {
        "game": {
          "over": true
        }
      }
    });
};

module.exports = gameOverUpdate;
