'use strict';

const app = require('./game/app');

const signUp = function (data) {
  return $.ajax({
    url: app.appSite.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};


module.exports = {
  signUp,
};
