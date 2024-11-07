"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")
  let alertDivs = 0
  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(nameInput.value)

    if (nameInput.value.length) {
      const liElem = document.createElement("li");
      const strongElem = document.createElement("strong")

      strongElem.appendChild(document.createTextNode(nameInput.value))
      liElem.classList.add("list-group-item");
      liElem.appendChild(strongElem);

      const ulElemMain = document.querySelector(".col-md-6 ul.list-group");
      ulElemMain.appendChild(liElem)
      nameInput.value = ""
    } else {
      if (alertDivs === 0) {
      const alertDiv = document.createElement("div");
      alertDiv.classList.add("alert", "alert-danger", "mt-2");
      alertDiv.setAttribute("role", "alert")
      
      alertDiv.appendChild(document.createTextNode("Bitte einen vollen Namen eingeben!"));

      const formTag = document.getElementsByTagName("form");
      formTag[0].after(alertDiv)
      alertDivs++
      setInterval(() => {
        alertDiv.remove();
        alertDivs = 0;
      }, 2000);
  }}}
)

  nameInput.addEventListener("change", (event) => {
    console.log("change:", nameInput.value)
  })

  nameInput.addEventListener("keyup", (event) => {
    console.log("keyup:", nameInput.value)
  })
}) 
