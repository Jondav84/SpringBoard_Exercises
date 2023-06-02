/** @format */

function countDown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log("Done!");
    } else {
      console.log(time);
    }
  }, 1000);
}

function randomGame() {
  let num;
  let count = 1;
  let timer = setInterval(function () {
    num = Math.random();
    if (num <= 0.75) {
      count++;
    } else {
      clearInterval(timer);
      console.log(`It took ${count} tries`);
    }
  }, 1000);
}
