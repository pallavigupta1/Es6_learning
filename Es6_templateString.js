function getMsg() {
    return `The year is ${new Date().getFullYear()}`;

}

getMsg();

console.log("inside", getMsg());

// Exmple 2

function doubleMessage(number) {
    return `Your number doubled is  ${2 * number}`;
}

console.log(doubleMessage(3));


function fullName(firstName, lastName) {
    return `${firstName}` + `${lastName}`;
}