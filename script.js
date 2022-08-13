"use strict";

const submitButton = document.querySelector(".submit-button");
const clearButton = document.querySelector(".clear-button");
const products = document.querySelector(".products");
const inputField = document.getElementById("items-input");

const numbers = /[0-9]/;
console.log();

submitButton.addEventListener("click", addItems);

function addItems() {
  if (checkInputValue()) {
    const createElement = document.createElement("p");
    const addIcon = document.createElement(`ion-icon`);
    addIcon.setAttribute("name", "trash-outline");
    createElement.textContent = inputField.value;
    products.appendChild(createElement);
    createElement.appendChild(addIcon);
    inputField.value = "";
    inputField.focus();
  }
  removeItems();
  clearItems();
}

function removeItems() {
  const ionIcons = document.querySelectorAll("ion-icon");
  ionIcons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      icon.parentElement.remove();
      icon.remove();
    });
  });
}

function checkInputValue() {
  const inputValue = inputField.value;

  if (inputValue === "") return;
  else if (/^\s*$/.test(inputValue)) {
    return false;
  } else if (
    !(inputValue === "") &&
    !(inputValue === null) &&
    !(inputValue === "undefined")
  )
    return true;
}

function clearItems() {
  const listItems = document.querySelectorAll(".products p");
  clearButton.addEventListener("click", () => {
    listItems.forEach((item) => {
      item.remove();
    });
  });
}
