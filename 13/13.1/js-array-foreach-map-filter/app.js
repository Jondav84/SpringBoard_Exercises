/** @format */

function doubleValues(arr) {
  let doubleArr = [];
  arr.forEach(function (num) {
    doubleArr.push(num * 2);
  });
  return doubleArr;
}

function onlyEvenValues(arr) {
  let evenArr = [];
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      evenArr.push(num);
    }
  });
  return evenArr;
}

function showFirstAndLast(arr) {
  let firstLastArr = [];
  arr.forEach(function (str) {
    firstLastArr.push(str[0] + str[str.length - 1]);
  });
  return firstLastArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  let wordToArr = str.split("");
  let kVal = {};
  const vowels = "aeiou";

  wordToArr.forEach(function (letter) {
    let lowCasLet = letter.toLowerCase();
    if (vowels.indexOf(lowCasLet) !== -1) {
      if (kVal[lowCasLet]) {
        kVal[lowCasLet]++;
      } else {
        kVal[lowCasLet] = 1;
      }
    }
  });
  return kVal;
}

function doubleValuesWithMap(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (num, idx) {
    return num * idx;
  });
}

function extractKey(arr, key) {
  return arr.map(function (kVal) {
    return kVal[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (kVal) {
    return kVal.first + " " + kVal.last;
  });
}

function filterByValue(arr, key) {
  return arr.filter(function (kVal) {
    return kVal[key] !== undefined;
  });
}

function find(arr, searchValue) {
  return arr.filter(function (val) {
    return val === searchValue;
  })[0];
}

function findInObj(arr, key, searchValue) {
  return arr.filter(function (kVal) {
    return kVal[key] === searchValue;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (str) {
      return vowels.indexOf(str) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function (num) {
      return num % 2 !== 0;
    })
    .map(function (num) {
      return num * 2;
    });
}
