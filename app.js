"use strict";

//Selectors
const input = document.querySelector("#userInput"); //user input bar
const button = document.querySelector("#addInput"); //user input add button
const reset = document.querySelector(".reset"); //user input reset button
const list = document.querySelector(".userInputContent"); //content list div

//Append Function
const appendList = function () {
  //content div
  const div = document.createElement("div");
  div.classList.add("contentDiv");
  //content span
  const textSpan = document.createElement("span");
  textSpan.classList.add("contentSpan");
  textSpan.textContent = input.value;
  div.appendChild(textSpan);
  //delete button
  const bin = document.createElement("button");
  bin.classList.add("binDelete");
  bin.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  div.appendChild(bin);
  //append to main container
  list.appendChild(div);
  //reset input field
  input.value = "";
};

//Delete Function
const remove = (e) => {
  const item = e.target;
  if (item.classList[0] === "binDelete") {
    const todo = item.parentElement;
    todo.remove();
  }
};

//Strike-through Function
const completed = (e) => {
  const item = e.target;
  if (item.classList[0] === "contentSpan") {
    const todo = item.classList;
    todo.toggle("completed");
  }
};

//Click Event
button.addEventListener("click", appendList);

//Key-press Event
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    appendList();
  }
});

//Delete Event
list.addEventListener("click", remove);

//Strike-through Event
list.addEventListener("click", completed);

//Reset Event
reset.addEventListener("click", function () {
  list.innerHTML = null;
  input.value = "";
});
