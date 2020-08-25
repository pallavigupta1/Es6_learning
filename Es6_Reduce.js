function balanceParens(string) {
    return !string.split("").reduce(function(previous, char) {
        if (char === "(") {
            return ++previous;
        }

        if (char === ")") {
            return --previous;
        }
        if (previous < 0) {
            return previous;
        }
        return previous;
    }, 0);

}

balanceParens("((())))");

// Exmple 2

var trips = [{ distance: 34 },
    { distance: 12 },
    { distance: 1 }
];

var sum = 0;
var totalDistance = trips.reduce(function(dtr) {
    // return ++trp.distance;
    console.log("inside");

    console.log("inside 123", dtr.distance);

    sum = sum + dtr.distance;
});

console.log("tpr", totalDistance);