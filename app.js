"use strict";

let button = document.querySelector("#addInput");
let list = document.querySelector(".userInputContent");
let input = document.querySelector("#userInput");
const div = document.createElement("div");
const p = document.createElement("p");
const bin = document.createElement("button");

//appends user input value
const appendList = function () {
  list.append(div);
  div.appendChild(p);
  div.appendChild(bin);
  p.textContent = input.value;
  p.classList.add("contentStyling");
  div.classList.add("contentDiv");
  bin.classList.add("binDelete");
  bin.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>`;
  input.value = null;
};

//function of button onClick
button.addEventListener("click", function () {
  appendList();
});

//function of "enter" key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    appendList();
  }
});

//strike-through event
p.addEventListener("click", function () {
  p.style.textDecoration = "line-through";
});

//delete content event
bin.addEventListener("click", function () {
  div.remove();
});
