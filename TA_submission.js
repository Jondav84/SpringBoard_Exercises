/** @format */

//Repeat

function repeat(str, multipler) {
  let newStr = "";
  if (multipler == 0) {
    return newStr;
  }
  for (let i = 0; i < multipler; i++) {
    newStr = newStr + str;
  }
  return newStr;
}
//removeFromString
function removeFromString(str, index, count) {
  let newStr = "";
  for (let i = 0; i < index; i++) {
    newStr = newStr + str[i];
  }
  for (let i = index + count; i < str.length; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
}
//reverse
function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

//min
function min(arr) {
  let minNum = arr[0];
  for (let num of arr) {
    if (num < minNum) {
      minNum = num;
    }
  }
  return minNum;
}

//slice
function slice(arr, index, len) {
  let newArr = [];
  for (let i = index; i < len; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
//keys
function keys(json) {
  var obj = JSON.parse(json);
  let keysArr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keysArr.push(key);
    }
  }
  return keysArr;
}

//values
function values(json) {
  var obj = JSON.parse(json);
  let valArr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      valArr.push(obj[key]);
    }
  }
  return valArr;
}

//swapKeyAndValue
function swapKeyAndValue(json, swapKey) {
  var obj = JSON.parse(json);
  var newObj = {};

  for (var key in obj) {
    if (key === swapKey) {
      newObj[obj[key]] = key;
    } else {
      newObj[key] = obj[key];
    }
  }

  return JSON.stringify(newObj);
}

//mulitples
function multiples(x, n) {
  let multArr = [];
  for (let i = 1; i <= n; i++) {
    multArr.push(x * i);
  }
  return multArr;
}

//pluck
function pluck(json, key) {
  var arr = JSON.parse(json);
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];

    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    } else {
      result.push(-1);
    }
  }

  return result;
}

//twoHighest
function twoHighest(arr) {
  let newArr = [];
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1) {
      num2 = num1;
      num1 = arr[i];
    } else if (arr[i] <= num1 && arr[i] >= num2) {
      num2 = arr[i];
    }
  }
  newArr.push(num2, num1);
  return newArr;
}

//minMaxKeyInObject
function minMaxKeyInObject(json) {
  var obj = JSON.parse(json);
  let strArr = [];
  let keys = Object.keys(obj);
  let maxKey = keys[0];
  let minKey = keys[0];
  for (let i = 1; i < keys.length; i++) {
    if (parseInt(keys[i]) > parseInt(maxKey)) {
      maxKey = keys[i];
    }
    if (parseInt(keys[i]) < parseInt(minKey)) {
      minKey = keys[i];
    }
  }
  strArr.push(minKey, maxKey);
  return strArr;
}

//stringFromObject
function stringFromObject(json) {
  var obj = JSON.parse(json);
  let pairs = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      pairs.push(`${key} = ${obj[key]}`);
    }
  }
  let str = pairs.join(", ");
  return str;
}

//countNumbers
function countNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++)
    if (!isNaN(parseInt(arr[i]))) {
      count++;
    }
  return count;
}
