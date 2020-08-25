// Exmple 1
var user = [{ name: 'pallavi' },
    { name: 'Alex' },
    { name: 'bill' }
];


// var userA;

// for (var i = 0; i < user.length; i++) {
//     if (user[i].name === 'Alex') {
//         userA = user[i];
//          break;
//     }
// }

// user;


var userA = user.find(function(userA) {
    return userA === 'Alex'
});


//  Exmple 2


function Car(model) {
    this.model = model;
}

var cars = [new Car('buick'),
    new Car('Camaro'),
    new Car('Focus')
];

cars.find(function(car) {
    return car.model === 'Focus';
});


// Exmple 3


var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

postForComment(posts, comment);


// Exmple 4

var usersData = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin = usersData.find(function(userInfo) {
    return userInfo.admin === true;
});

console.log("user infor", admin)


// Exmple 5
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find(function(balances) {
    return balances.balance === 12;
});

console.log("user account info", account);


// Exmple 6


var ladders = [{ id: 1, height: 20 },
    { id: 3, height: 25 }
];

function findWhere(array, criteria) {

}