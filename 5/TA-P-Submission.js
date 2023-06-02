/** @format */

function calculateAverage(numbers) {
  // Write your code here
  let sum = 0;
  if (numbers.length == 0) {
    return 0;
  }
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

function dedupe(numbers) {
  let nonDupe = [];
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!nonDupe[numbers[i]]) {
      nonDupe[numbers[i]] = true;
      arr.push(numbers[i]);
    }
  }
  return arr;
}

function strExpand(str) {
  let resStr = "";
  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    let ltr = str.charAt(i);
    if (!strObj[ltr]) {
      strObj[ltr] = 1;
    } else {
      strObj[ltr]++;
    }
  }
  for (let key in strObj) {
    resStr += key + strObj[key];
  }
  return resStr;
}

function isPangram(str) {
  str = str.toLowerCase();
  let countObj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "a" && char <= "z") {
      countObj[char] = 1;
    }
  }
  return Object.keys(countObj).length == 26;
}
