//  Exmple 1

const add = (a, b) => a + b;

const newSum = add(1, 4);

console.log("new sum", newSum);

//  Exmple 2

const double = (Number) => 2 * Number;

console.log("Number double ", double(4));

//  Exmple 3
const double1 = (Number1, Number2) => {
    return 2 * Number1 + 2 * Number2;
}

console.log("add two nimber", double1(8, 4));


//  Exmple 4

const digits = [1, 2, 3, 4, 5, 6];

// digits.map(function(dt){
//     return 2*dt;
// });

digits.map((dt => 2 * dt));

//  Exmple 5

const team = {
    members: ['jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;

        });

    }

};

team.teamSummary();

console.log("inside team data", team.teamSummary());

//  Exmple 6