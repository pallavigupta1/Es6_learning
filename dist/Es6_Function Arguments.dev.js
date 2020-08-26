"use strict";

function makeAjaxReq(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  return method;
}

makeAjaxReq('google.com', null);
makeAjaxReq('google.com', 'POST'); // Exmple 2 

function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
} //   Exmple 3


function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';
  return style;
}