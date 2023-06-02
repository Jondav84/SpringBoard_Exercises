/** @format */

var container = document.getElementById("container");

var container = document.querySelector("#container");

var second = document.querySelectorAll(".second");
var second = document.getElementsByClass("second");

var thirdOl = document.querySelector("ol .third");

container.innerText = "Hello!";

var foot = document.querySelector("footer");
footer.classList.Add("main");

footer.classList.remove("main");

let newLi = document.createElement("li");

newLi.innerText = "four";

let ul = document.querySelector("ul");
ul.appendChild(newLi);

let olLiArr = document.querySelectorAll("ol li");
for (let li of olLiArr) {
  li.style.backgroundColor = "green";
}

let deadFt = document.getElementByClass("footer");
deadFt.remove();
