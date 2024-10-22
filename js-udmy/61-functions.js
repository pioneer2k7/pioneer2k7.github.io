"use strict"


let b = "lümmel"

function sayHello(a) {
    console.log(a);
}
sayHello(b)

function greetAndLength(a, b) {
    
    console.log("Hallo " + a + ", dein Name hat " + a.length + " Zeichen.");
    if (typeof b === "number") {
        console.log("Du bist " + b + " Jahre Alt");
    } if (typeof b === "string") {
        console.log("Bitte gib mir noch dein Alter")
    } if (b === null) {
        console.log("Du trottel")
    }
} 

greetAndLength("Amel", 31)