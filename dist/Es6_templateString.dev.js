"use strict";

function getMsg() {
  return "The year is ".concat(new Date().getFullYear());
}

getMsg();
console.log("inside", getMsg()); // Exmple 2

function doubleMessage(number) {
  return "Your number doubled is  ".concat(2 * number);
}

console.log(doubleMessage(3));

function fullName(firstName, lastName) {
  return "".concat(firstName) + "".concat(lastName);
}