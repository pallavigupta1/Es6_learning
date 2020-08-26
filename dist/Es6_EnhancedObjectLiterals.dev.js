"use strict";

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function inventoryValue() {
      return this, inventory.reduce(function (total, book) {
        return total + book.price;
      }, 0);
    },
    priceForTitle: function priceForTitle(title) {
      return this.inventory.find(function (book) {
        return book.title === title;
      }).price;
    }
  };
} // Exmple 2


var inventory = [{
  title: 'Harry Potter',
  price: 10
}, {
  title: 'Eloquent Javascript',
  price: 15
}]; // Exmple 3

function saveFile(url, data) {
  $.ajax({
    url: url,
    data: data,
    method: 'POST'
  });
}

var url = "https://www.google.com/";
var data = {
  color: 'red'
};
saveFile(url, data); // Exmple 4

var COLORS = {
  red: '#ff0000',
  blue: '#0000ff'
}; // Exmple 5

var props = {
  fields: ['firstName', 'lastName', 'phoneNumber']
}; // Exmple 6

var canvasDimensions = function canvasDimensions(width, initialHeight) {
  var height = initialHeight * 9 / 16;
  return {
    width: width,
    height: height
  };
}; // Exmple 7


var color = 'red';
var Car = {
  color: 'red',
  drive: function drive() {
    return 'Vroom!';
  },
  getColor: function getColor() {
    return this.color;
  }
};