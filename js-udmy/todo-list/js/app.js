'use strict';

const KEY_ENTER = 13;

document.addEventListener("DOMContentLoaded", () => {

    // variablen definieren
    const inputTodo = document.querySelector(".new-todo"); // input box
    const ulElement = document.querySelector(".todo-list"); // ul element mit todo liste -- darunter werden die li elemente angefügt
    const footerElem = document.querySelector(".footer"); // footer display none/shown
    const clearBtn = document.querySelector(".clear-completed"); // clear btn

// funktion zum laden der gepeichertern todos
const loadTodosFromStorage = () => {
    const savedTodos = JSON.parse(localStorage.getItem("savedTodos")) || [];

    for (const todo of savedTodos) {
        addTodo(todo.text, todo.completed);
    }
};

//funktion um todos zu speichern als obj
const saveTodosToStorage = () => {
    const todos = [];
    const liElems = ulElement.querySelectorAll("li");
    
    for (const liElem of liElems) {
        const text = liElem.innerText;
        const completed = liElem.classList.contains("completed");
        todos.push({text, completed})
    }
    localStorage.setItem("savedTodos", JSON.stringify(todos));
};

// count todos 
const todosCount = () => {
        let todoCountValue = document.querySelector(".todo-count").firstChild;
        let liElems = ulElement.querySelectorAll("li");
        let counter = 0;

        for (const liElem of liElems) {
            if (!liElem.classList.contains("completed")) {
                counter++;
            }
        }
        todoCountValue.innerText = counter
        footerDisplay();
}

//function um footer zu entfernen bzw. anzuzeigen
const footerDisplay = () => {
        let liElems = ulElement.querySelectorAll("li.completed");
        if (ulElement.firstElementChild) {
            footerElem.style.display = "";
        } else { 
            footerElem.style.display = "none";
        }

        if (liElems.length < 1) {
            clearBtn.style.display = "none"
        } 
        if (liElems.length > 0) {
            clearBtn.style.display = ""
        }
};

footerDisplay();
todosCount();

// function zum hinzufügen von todos
// wird später aufgerufen von eventlistenern click/keypress
const addTodo = (text, completed = false) => {
        
        const labelElem = document.createElement("label");
        const liElem = document.createElement("li");
        const destroyButton = document.createElement("button");
        const inputToggle = document.createElement("input");
        const divElem = document.createElement("div");


        //destory button style
        destroyButton.classList.add("destroy")

        //label (text)
        labelElem.innerText = text;

        //input elem style & attribute
        inputToggle.classList.add("toggle")
        inputToggle.setAttribute("type", "checkbox");

        //div element style
        divElem.classList.add("view");

        divElem.appendChild(inputToggle);
        divElem.appendChild(labelElem);
        divElem.appendChild(destroyButton);

        liElem.appendChild(divElem);

        ulElement.appendChild(liElem)

        if (completed) {
            liElem.classList.add("completed");
            inputToggle.checked = true;
        }

        // console.log(todoInputValue)
        inputTodo.value = ""

        destroyButton.addEventListener("click", () => {
            liElem.remove();
            footerDisplay();
            todosCount();
            saveTodosToStorage();
        })

        inputToggle.addEventListener("click", () => {
            inputToggle.toggleAttribute("checked")
            if (inputToggle.hasAttribute("checked")) {
                liElem.classList.add("completed");
                todosCount();
                saveTodosToStorage();
            } else {
                liElem.classList.remove("completed");
                todosCount();
                saveTodosToStorage();
            }
        })

        // const openTodos = JSON.parse(localStorage.getItem("openTodos")) || [];
        // openTodos.push(labelElem.innerText);
        // localStorage.setItem("openTodos", JSON.stringify(openTodos));
        
        footerDisplay();
        todosCount();
        saveTodosToStorage();

};

// clear todos
// hide footer when no todos left
clearBtn.addEventListener("click", () => {
        const checkedLiElems = ulElement.querySelectorAll("li.completed");
        for (const checkedLiElem of checkedLiElems) {
            checkedLiElem.remove();
            saveTodosToStorage();
        }
        footerDisplay();
})

// checkt ob enter gedrückt wurde und führt dann die function aus
inputTodo.addEventListener("keypress", (event) => {
    if (event.keyCode === KEY_ENTER) {
        addTodo(inputTodo.value);
    }
})
loadTodosFromStorage();


});