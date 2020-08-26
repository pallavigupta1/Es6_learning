"use strict";

// exmple 1
var saveFileed = {
  extension: 'jpg',
  name: 'repost',
  sixe: 14040
};

function fileSummary(_ref, _ref2) {
  var name = _ref.name,
      extension = _ref.extension,
      size = _ref.size;
  var color = _ref2.color;
  return "".concat(color, " the file ").concat(name, ".").concat(extension, " is of size ").concat(size);
}

fileSummary(saveFileed, {
  color: 'red'
}); // exmple 2

var companies = ['Google', 'FaceBook', 'Uber']; // const [name] = companies;
// const firstCompany = companies[0];

var name = companies[0],
    name1 = companies[1],
    name2 = companies[2],
    rest = companies.slice(3);
var profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}