 function createBookShop(inventory) {
     return {
         inventory,
         inventoryValue() {
             return this, inventory.reduce((total, book) => total + book.price, 0)
         },

         priceForTitle(title) {
             return this.inventory.find(book => book.title === title).price;
         }
     };

 }

 // Exmple 2
 const inventory = [
     { title: 'Harry Potter', price: 10 },
     { title: 'Eloquent Javascript', price: 15 }
 ];

 // Exmple 3
 function saveFile(url, data) {
     $.ajax({
         url,
         data,
         method: 'POST'
     });
 }

 const url = "https://www.google.com/";
 const data = { color: 'red' };

 saveFile(url, data);

 // Exmple 4

 const COLORS = {
     red: '#ff0000',
     blue: '#0000ff'
 };


 // Exmple 5

 const props = { fields: ['firstName', 'lastName', 'phoneNumber'] };


 // Exmple 6

 const canvasDimensions = function(width, initialHeight) {
     const height = initialHeight * 9 / 16;
     return {
         width: width,
         height: height
     };
 }

 // Exmple 7

 const color = 'red';

 const Car = {
     color: 'red',
     drive: function() {
         return 'Vroom!';
     },
     getColor: function() {
         return this.color;
     }
 };