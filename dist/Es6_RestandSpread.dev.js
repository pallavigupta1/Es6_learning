"use strict";

function addNUmber() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}

console.log("sum ", addNUmber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
var array = ['red', 'yellow', 'green'];
var array1 = ['black', 'blue', 'pink'];
var fallcolor = ['banana'];
['bangalore', 'bhopal'].concat(array, array1, fallcolor); // Exmple 2

var mathLib = {
  cal: function cal() {
    console.log('please use this');
    return this.multiply.apply(this, arguments);
  },
  multiply: function multiply(a, b) {
    return a * b;
  }
}; // Exmple 4
// Exmple 5