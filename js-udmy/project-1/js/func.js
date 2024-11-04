"use strict"
console.log("Hello");

const clickValue = document.getElementById("clickValue");
const clickAdd = document.getElementById("clickAdd");

clickAdd.addEventListener("click", () => {
    clickValue.innerText("test");
})

