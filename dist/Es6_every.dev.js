"use strict";

var computers = [{
  name: 'Apple',
  ram: 24
}, {
  name: 'compaq',
  ram: 4
}, {
  name: 'Acer',
  ram: 32
}];
var allComputerCanRunProgram = true;
var onlySomeComputerCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputerCanRunProgram = false;
  } else {
    onlySomeComputerCanRunProgram = true;
  }
} // ==================


console.log("allComputerCanRunProgram", allComputerCanRunProgram);
console.log("onlySomeComputerCanRunProgram", onlySomeComputerCanRunProgram);
computers.every(function (computerA) {
  return computerA.ram > 16;
});
computers.some(function (computerB) {
  return computer.ram > 16;
});