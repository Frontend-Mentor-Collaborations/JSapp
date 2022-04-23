"use strict";

let button = document.querySelector("#addInput");
let list = document.querySelector(".userInputContent");
let input = document.querySelector("#userInput");

const appendList = function () {
  const p = document.createElement("p");
  p.textContent = input.value;
  list.appendChild(p);
};

button.addEventListener("click", function () {
  appendList();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    appendList();
  }
});
