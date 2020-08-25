var number = [12, 23, 34, 45, 56, 67, 78];

var sum = number.reduce(function(suma, numbers) {

    return suma + numbers;

}, 0);

console.log(sum);

// Exmple 2
var trips = [{ distance: 34 },
    { distance: 12 },
    { distance: 1 }
];

var totalDistance = trips.reduce(function(totalDistance, digit) {
    return digit.distance + totalDistance;
}, 0);


console.log("inside", totalDistance);

// Exmple 3

var primaryColors = [{ color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);

    return previous;
}, []);

console.log("primaryColors", primaryColors);

// Exmple 4