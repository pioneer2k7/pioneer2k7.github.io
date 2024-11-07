"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }

  const cardHeaders = document.getElementsByClassName("card-header");
  
  for (const cardHeader of cardHeaders) {
    cardHeader.style.cursor = "pointer"
    cardHeader.nextElementSibling.classList.add("d-none")
    cardHeader.addEventListener("click", () => {
    let childElem = cardHeader.children[0].children;
    
    if (childElem[0].classList.contains("fa-angle-double-down")) {
      childElem[0].classList.replace("fa-angle-double-down", "fa-angle-double-up")
    } else 
    if (childElem[0].classList.contains("fa-angle-double-up")) {
      childElem[0].classList.replace("fa-angle-double-up", "fa-angle-double-down")
    }

    cardHeader.nextElementSibling.classList.toggle("d-none")
  })

}}) 