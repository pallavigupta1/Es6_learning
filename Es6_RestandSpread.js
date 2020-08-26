function addNUmber(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log("sum ", addNUmber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


const array = ['red', 'yellow', 'green'];
const array1 = ['black', 'blue', 'pink'];
const fallcolor = ['banana'];

['bangalore', 'bhopal', ...array, ...array1, ...fallcolor];


// Exmple 2
const mathLib = {
    cal(...rest) {
        console.log('please use this');
        return this.multiply(...rest);
    },

    multiply(a, b) {
        return a * b;
    }
};







// Exmple 4

// Exmple 5