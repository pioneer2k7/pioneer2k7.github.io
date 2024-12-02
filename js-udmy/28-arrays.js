"use strict"

let students = [
    "Peter Zwegat",
    "Franziska Furz",
    "Angelo Merte",
    "Emanuel Grafler",
    "vier"
]

students.push("hi")
students.splice(students.indexOf("vier"), 1)

console.log(students);
