"use strict";

//  Exmple 1
var add = function add(a, b) {
  return a + b;
};

var newSum = add(1, 4);
console.log("new sum", newSum); //  Exmple 2

var _double = function _double(Number) {
  return 2 * Number;
};

console.log("Number double ", _double(4)); //  Exmple 3

var double1 = function double1(Number1, Number2) {
  return 2 * Number1 + 2 * Number2;
};

console.log("add two nimber", double1(8, 4)); //  Exmple 4

var digits = [1, 2, 3, 4, 5, 6]; // digits.map(function(dt){
//     return 2*dt;
// });

digits.map(function (dt) {
  return 2 * dt;
}); //  Exmple 5

var team = {
  members: ['jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function teamSummary() {
    var _this = this;

    return this.members.map(function (member) {
      return "".concat(member, " is on team ").concat(_this.teamName);
    });
  }
};
team.teamSummary();
console.log("inside team data", team.teamSummary()); //  Exmple 6