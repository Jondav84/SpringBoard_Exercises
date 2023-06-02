/** @format */

//Functions exercise

//Difference:
function difference(x, y) {
  return x - 2;
}
//Product:
function product(x, y) {
  return x * y;
}
//printDay:
function printDay(num) {
  const day = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return day[num];
}

//lastElement:
function lastElement(arr) {
  return arr[arr.length - 1];
}

//numberCompare:
function numberCompare(x, y) {
  if (x == y) {
    return "Numbers are equal";
  } else if (x > y) {
    return "First is greater";
  } else if ((x, y)) {
    return "Second is greater";
  }
}

//singleLetterCount:
function singleLetterCount(word, letter) {
  const lowWord = word.toLowerCase();
  const lowLetter = letter.toLowerCase();
  let count = 0;

  for (let i = 0; i < lowWord.length; i++) {
    if (lowWord[i] === lowLetter) {
      count++;
    }
  }
  return count;
}

//multipleLetterCount:
function multipleLetterCount(word) {
  word = word.toLowerCase();
  let letterCount = {};

  for (let i = 0; i < word.length; i++) {
    if (!letterCount[word[i]]) {
      letterCount[word[i]] = 1;
    }
    letterCount[word[i]]++;
  }
  return letterCount;
}

//arrayManipulation:
function arrayManipulation(array, command, location, value) {
  if (command === "remove" && location === "end") {
    return array.pop();
  }
  if (command === "remove" && location === "beginning") {
    return array.shift();
  }
  if (command === "add" && location === "beginning") {
    array.unshift(value);
    return array;
  }
  if (command === "add" && location === "end") {
    array.push(value);
    return array;
  }
}

//Is Palindrome:
function isPalindrome(word) {
  word = word.toLowerCase();
  return word === word.split("").reverse().join("");
}

//rockPaperScissors:
function rockPaperSicssors() {
  // array of choices
  const choices = ["rock", "paper", "scissors"];
  //choice variables for user and computer
  const userChoice = prompt(
    "Please choose rock, paper, or scissors"
  ).toLowerCase();
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  //logic for tie/win/lose
  if (userChoice === compChoice) return "Tie!";
  if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    return `Your choice ${userChoice}, Machine's choice ${compChoice} :  You win!!`;
  }
  return `Your choice ${userChoice}, Machine's choice ${compChoice} : You lose`;
}
