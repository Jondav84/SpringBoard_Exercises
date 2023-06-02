/** @format */

// /** @format */

// // Object Destructuring 1:
// // What does the following code return/print?
/**
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets);
console.log(yearNeptuneDiscovered);
*/

/************* 
// Answer:
8
1846
***************/

// // Object Destructuring 2:
// // What does the following code return/print?
/**
let PlanetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659,
};
let { numPlanets, ...discoveryYears } = PlanetFacts;
console.log(discoveryYears);
*/

/*************
// Answer:
{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
************/

// // Object Destructuring 3:
// // What does the following code return/print?
/** 
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: "Alejandro", favoriteColor: "purple" });
getUserData({ firstName: "Melissa" });
getUserData({});
*/

/************* 
// Answer:
'Your name is Alejandro and you like purple'
'Your name is Melissa and you like green'
'Your name is undefined and you like green'
***************/

// // Array Destructuring 1:
// // What does the following code return/print?
/** 
let [first, second, third ] = ["Maya", "Marisa", "Chi"];
console.log(first);
console.log(second);
console.log(third);
*/

/************* 
// Answer:
'Maya'
'Marisa'
'Chi'
***************/

// // Array Destructuring 2:
// // What does the following code return/print?
/**
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
];
console.log(raindrops);
console.log(whiskers);
console.log(aFewOfMyFavoriteThings);
*/

/************* 
// Answer:
"Raindrops on roses"
"whiskers on kittens"
["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
***************/

// // Array Destructuring 3:
// // What does the following code return/print?
/**
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers);
*/

/*************
// Answer:
[10, 30, 20]
************/
//
//
//
//
//
// ES5 Assigning Variables to Object Properties:
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;

//ES2015 Object Destructuring:
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

//
//
//
// ES5 Array Swap:
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES2015 One-Line Array Swap with Destructuring:
[arr[0], arr[1]] = [arr[1], arr[0]];

//
//
//
/**raceResuls():
Write a function called raceResults which accepts a single array argument. it shoukld return an object
with the keys first, second, third, and rest.
 * first: the first element in the array
 * second: the seconf element in the array
 * third: the third element in the array
 * rest: all other elements in the array
Write a one-line functio to make this work using:
 * An arrow function
 * Destructuring
 * Enchanceed object assignment:
*/
raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
