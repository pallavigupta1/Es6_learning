"use strict";

// Exmple 1
var names = ["Alwxandra", "pawan", "shikha"];
names.every(function (name) {
  return name.length > 4;
});
names.some(function (name) {
  return name.length > 4;
}); // Exmple 2

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

var userName = new Field("2cool");
var passWord = new Field("my_password");
var birthDate = new Field("10/10/2020"); // userName.validate() && passWord.validate();

var fields = [userName, passWord, birthDate];
var formIsVaild = fields.every(function (field) {
  return field.validate();
}); // if(formIsVaild){
// } else{
// }
// Exmple 3

var users = [{
  id: 21,
  hasSubmitted: true
}, {
  id: 62,
  hasSubmitted: false
}, {
  id: 4,
  hasSubmitted: true
}];
var hasSubmitted = users.every(function (u) {
  return u.hasSubmitted === true;
}); // Exmple 4

var requests = [{
  url: '/photos',
  status: 'complete'
}, {
  url: '/albums',
  status: 'pending'
}, {
  url: '/users',
  status: 'failed'
}];
var inProgress = requests.some(function (statusA) {
  if (statusA.status == 'pending') {
    return true;
  } else {
    return false;
  }
});
console.log("inProgress", inProgress); // var inProgress = requests.some(function(statusA) {
//     return statusA.status === 'pending';
// });