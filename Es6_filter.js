var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 12, price: 13 },
    { name: 'cetery', type: 'vegetable', quantity: 11, price: 14 },
    { name: 'orange', type: 'fruit', quantity: 9, price: 23 }
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}


filteredProducts;

products.filter(function(product) {
    return product.type === 'fruit';

});

products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 0 &&
        product.price < 10
});


// Exmple 2

var post = { id: 4, title: 'new Post' };
var comments = [
    { postId: 4, contents: 'awesome post' },
    { postId: 3, contents: 'it was ok' },
    { postId: 4, contents: 'neat' }
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}

commentsForPost(post, comments);


// Exmple 3

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
// var num = numbers[i];
//     if (num > 50) {
//         filteredNumbers.push(numbers[i]);
//     }
// }
numbers.filter(function(number) {
    if (number > 50) {
        filteredNumbers.push(number);
    }

});

console.log("number is greter then 50", filteredNumbers);

// Exmple 4

var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin;
});

console.log(filteredUsers);

// var digits = [{ apple: true }, { apple: false }];
// var lessThenFifteen = reject(digits, function(digit) {
//     return digit.apple;
// });

// console.log(digits);