"use strict";

var name = 'pallavi';
var title = 'software Engineer';
title = 'senior software Engineer';
var dateOfBirth = '27/03/1992';
var age = 27; // Exmple 2

var statuses = [{
  code: 'OK',
  response: 'Request successful'
}, {
  code: 'FAILED',
  response: 'There was an error with your request'
}, {
  code: 'PENDING',
  response: 'Your reqeust is still pending'
}];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}