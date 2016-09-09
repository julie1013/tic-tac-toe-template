'use strict';

const app = require('./game/app');

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

const signOut = function(data) {
  let id = app.user.id;
  let token = app.user.token;
  return  $.ajax({
    url: app.host + '/sign-out/' + id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + token
    },
    data: data,
  });
};


module.exports = {
  signUp,
  signIn,
  signOut,
};
