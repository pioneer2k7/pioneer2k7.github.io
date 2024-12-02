"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student");
  const nameInput = document.getElementById("nameInput");
  let alertDivs = 0;
  const agbInput = document.getElementById("agbInput");
  console.log(agbInput)



  
  // Funktion zum Rendern der To-Do-Liste
  const renderList = () => {
    const ulElemMain = document.querySelector(".col-md-6 ul.list-group");
    ulElemMain.innerHTML = ""; // Liste leeren, um doppeltes Rendern zu vermeiden
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(studentName => {
      const liElem = document.createElement("li");
      const strongElem = document.createElement("strong");
      strongElem.appendChild(document.createTextNode(studentName));
      liElem.classList.add("list-group-item");
      liElem.appendChild(strongElem);
      ulElemMain.appendChild(liElem);
    });
  };

  // Initiale Liste rendern beim Laden der Seite
  renderList();

  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(nameInput.value);

    if (nameInput.value.length) {
      // Aktuellen Wert zur Liste hinzufügen
      const students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(nameInput.value);
      localStorage.setItem("students", JSON.stringify(students));

      // Rendern und Input leeren
      renderList();
      nameInput.value = "";
    } else {
      if (alertDivs === 0) {
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert", "alert-danger", "mt-2");
        alertDiv.setAttribute("role", "alert");
        alertDiv.appendChild(document.createTextNode("Bitte einen vollen Namen eingeben!"));

        const formTag = document.querySelector("form");
        formTag.after(alertDiv);
        alertDivs++;
        setInterval(() => {
          alertDiv.remove();
          alertDivs = 0;
        }, 2000);
      }
    }
  });

  nameInput.addEventListener("change", (event) => {
    console.log("change:", nameInput.value);
  });

  nameInput.addEventListener("keyup", (event) => {
    console.log("keyup:", nameInput.value);
  });

  window.addEventListener("keypress", (event) => {
    console.log(event);
  });
});
