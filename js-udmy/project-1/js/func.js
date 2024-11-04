"use strict"

const clickValue = document.getElementById("clickValue");
const clickAdd = document.getElementById("clickAdd");

document.addEventListener("DOMContentLoaded", () => {
    clickAdd.addEventListener("click", () => {
        clickValue.innerText = "test";
    })
})