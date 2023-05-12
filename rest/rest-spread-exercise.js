/** @format */

//  Given this function:

// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

// Refractor it to use the rest operator & an arrow function:

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

// findMin:

// write a function called findMin,
// that accepts a variable number of arguments,
// and returns the smallest argument.

const findMin = (...args) => Math.min(...args);

// mergeObjects:

// Write a function called mergeObjects,
// that accepts two objects,
// and returns a new object,
// which contains all the kVals of both objects.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// doubleAndReturnArgs:

// Write a function called doubleAndReturnArgs,
// which accepts an array and a variable number of arguments,
// the function should return a new array with the original array values,
// and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((val) => val * 2),
];

// Slice and Dice!:

// For this section,
// write the following functions using rest,
// spread and refractor these functions to be arrow functions!

// remove a random element in the items array,
// and return a new array without the item in it:
function removeRandom(items) {
  const idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

// Return a new array with every item in array1 and array2.
function extend(array1, array2) {
  return [...array1, ...array2];
}

// Return a new object with all the keys and values from obj and a new kVal.
function addKeyVal(obj, key, val) {
  return { ...obj, [key]: val };
}

// Return a new object with a key removed.
function removeKey(obj, key) {
  let newObj = { ...obj };
  delete obj[key];
  return newObj;
}

//Combine two objects and return a new object
function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

//Return a new object with a modifed key and value
function update(obj, key, val) {
  return { ...obj, [key]: val };
}
