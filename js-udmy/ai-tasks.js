"use strict"

console.log("-".repeat(20) + "\n Aufgabe 1 \n" + "-".repeat(20))

let fruits = ["apple", "banana", "cherry"];

// Aufgabe: Verwende for...of, um jedes Element im Array zu loggen

for (const fruit of fruits) {
    console.log(fruit + ": " + fruits.indexOf(fruit));
}

// Aufgabe: Verwende for...in, um jeden Index im Array zu loggen

for (const fruit in fruits) {
    console.log(fruit + ": " + fruits[fruit]);
}

// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 2 \n" + "-".repeat(20))

console.log("objekte noch nicht durch")


// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 3 \n" + "-".repeat(20))

let word = "JavaScript";

// Aufgabe: Verwende for...in, um die Anzahl der Zeichen im String zu zählen
let charsInWord = 0
for (const index in word) {
    charsInWord++;
}
console.log(charsInWord)

// Aufgabe: Verwende for...of, um jedes Zeichen im String zu loggen
let countOf = 0

for (const char of word) {
    console.log(char + " " + countOf);
    countOf++;
}
console.log(countOf)

// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 4 \n" + "-".repeat(20))

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Aufgabe: Verwende for...of, um jedes innere Array zu loggen

for (const array of matrix) {
    console.log(array);
}

for (const array of matrix) {
    for (const innerArray of array) {
        console.log(innerArray)
    }
}

// Aufgabe: Verwende for...in, um die Indizes jedes inneren Arrays zu loggen

for (const index in matrix) {
    console.log(index);
}

// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 5 \n" + "-".repeat(20))


console.log("objekte noch nicht durch")

// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 6 \n" + "-".repeat(20))

let colors = ["red", "green", "blue", "yellow"];

// Aufgabe: Verwende for...in, um den Index des Werts "blue" zu finden und zu loggen
let searchFor = "blue"

for (const i in colors) {
    if (colors[i] === searchFor) {
        console.log("Der Index von " + searchFor + " ist " + i)
        break
    }
}

// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 7 \n" + "-".repeat(20))

let numbers = [10, 20, 30, 40, 50];

// Aufgabe: Verwende for...of, um die Summe aller Zahlen im Array zu berechnen
let sum = 0
for (const value of numbers) {
    sum = sum + value;
}
console.log(sum)

// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 8 \n" + "-".repeat(20))

let user = {
    username: "user1",
    password: "secret",
    role: "admin"
};

// Aufgabe: Verwende for...in, um den Wert der Eigenschaft "password" zu ändern, z.B. in "newSecret"


console.log("objekte noch nicht durch")


// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 9 \n" + "-".repeat(20))

let languages = ["JavaScript", "Python", "Ruby"];
let person = { firstName: "John", lastName: "Doe", age: 30 };

// Aufgabe: Verwende for...of, um durch das Array zu iterieren

// Aufgabe: Verwende for...in, um durch die Eigenschaften des Objekts zu iterieren
console.log("objekte noch nicht durch")

// _______________________________________________________________
console.log("-".repeat(20) + "\n Aufgabe 10 \n" + "-".repeat(20))


let sentence = "The quick brown fox jumps over the lazy dog";

// Aufgabe: Verwende for...of, um die Anzahl der Vokale (a, e, i, o, u) im Satz zu zählen

let vocalSum = 0

for (const char of sentence) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
        vocalSum++;
    }
}
console.log(vocalSum)

