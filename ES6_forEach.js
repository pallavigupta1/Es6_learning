var c = ['a', 'b', 'c', 'd', 'e'];
// for(var i =0; i<c.lenght; i++){
//  conole.log(c[i]);

// }

c.forEach(function(c1) {
    console.log(c1);
})


// Exmple 2

var number = [1, 2, 3, 4, 5, 4];
var sum = 0;

function add(number1) {
    sum += number1;
}

number.forEach(add);

sum;
console.log(sum);


// Exmple 3

function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    for (var i = 0; i < posts.length; i++) {
        savePost(posts[i]);
    }

    console.log(savePost(posts))
}

// Exmple 4
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];


images.forEach(obj => {
    // console.log("obj ", obj);
    areas.push(obj.height * obj.width);
});

console.log("areas :", areas)

// Exmple 5