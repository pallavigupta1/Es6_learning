//Exmple 1
var car = [{
        model: 'bucik',
        price: 'cheap'
    },
    { model: 'Coamaro', price: 'expensive' }
]

var prices = car.map(function(car) {
    return car.price;
});

prices;
console.log(prices);

//Exmple 2

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights = images.map(function(images) {
    return images.height;
})

//Exmple 3

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];
var arr = [];

var speeds = trips.map(function(t) {
    var slicearry = Math.floor(t.distance / t.time);

    arr.push(slicearry);

    return arr.sort();


});
console.log(arr);

//Exmple 4

// var paints = [{ color: 'red' },
//     { color: 'blue' },
//     { color: 'yellow' }
// ]

// function pluck(array, property) {

// }