"use strict"

// Aufgabe 1:
//
// Strafaufgabe für einen Schüler an der Sprachschule!
// Er soll 25x schreiben: "Ich soll im Unterricht nicht stören".
// 
// Schreibe ein kleines Programm, was dies für den Schüler 
// erledigt ;)
/*
for (let i=1; i<=25; i++) {
    console.log(i + " Ich soll im Unterricht nicht stören")
}*/

// Aufgabe 2: Sprachschule
//
// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich 
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo!

/*
let students = [
  "Max", 
  "Monika",
  "Franziska", 
  "Bernd", 
  "Tobias", 
  "Andreas"
]

let students1 = []
let students2 = []

for (let i in students) {
    if (i % 2 === 0) {
        students1.push(students[i])
    } else {
        students2.push(students[i]);
    }
}
console.log(students1);
console.log(students2);


// TEST
/*
for (const student of students) {
  if (student === "Amel") {
    console.log("AMEL")
  } else {
    console.log("nicht amel")
  }
}
*/

// Aufgabe 3
// 
// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
// 
// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2"
]

let prices = [
  400,
  500,
  550,
  600,
  650,
  700
]

let sumC1 = 0;
let sumA2toC1 = 0;
let userValue1 = "C1"  //z.B. usereingabe (übergeben von html etc.)
let userValue2 = "A2"
let level

console.log("-".repeat(20) + "\n Aufgabe 3a \n" + "-".repeat(20))

for (const i in prices) {
  let price = prices[i];
  level = levels[i];
  sumC1+=price;
  if (level === userValue1) {
  break
  }
}
console.log("Der Preis für alle Sprachlevel bis einschließlich " + level + " beträgt EUR " + sumC1)

console.log("-".repeat(20) + "\n Aufgabe 3b \n" + "-".repeat(20))


let levelA2seen = false

for (const i in prices) {
  let price = prices[i];
  level = levels[i];
  if (level === userValue2) {
    levelA2seen = true;
  }
  if (levelA2seen) {
    sumA2toC1+=price;
  }
  if (level === userValue1) {
    break
  }
}
console.log("Der Preis für alle Sprachlevel von A2 bis einschließlich " + level + " beträgt EUR " + sumA2toC1)

console.log("-".repeat(20) + "\n Aufgabe 3c \n" + "-".repeat(20))

let userBudget = 1500;
let sum = 0;

for (const i in levels) {
  let price = prices[i];
  let level = levels[i];

  if (sum + price >= userBudget) {
    console.log("Du kannst dir den Sprachkurs bis einschließlich " + levels[i-1] + " leisten." + " Es kostet dich EUR " + sum)
    break
  }
  sum+=price;
}

// Aufgabe 4
//
// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
// 
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3. 
// Kurs hinzugefügt werden:
let studentsPerCourse = [
  ["Max", "Monika"], // Erster Kurs
  ["Erik", "Erika"] // Zweiter Kurs
]

console.log(studentsPerCourse.length)
// Aufgaben:
// 
//  a) Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!
console.log("-".repeat(20) + "\n Aufgabe 4a \n" + "-".repeat(20))


let amountStudents = 0;
for (const students of studentsPerCourse) {
  amountStudents += students.length
}
console.log("Es sind insgesamt " + amountStudents + " Teilnehmer");


// 
//  b) Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
//     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
//     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
//     Kurs entfernen zu können.
// 
//     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen 
//     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
//     werden konnte, da er ja gar nicht eingeschrieben ist.
//
// Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
// Sprachkursen zurechtkommt!

console.log("-".repeat(20) + "\n Aufgabe 4b \n" + "-".repeat(20))

let removeStd1 = "Maxi"
let removeStd2 = "Erika"
let studentFound = false
for (const student of studentsPerCourse) {
    if (student.indexOf(removeStd1) !== -1) {
      let studentToRemove = student.indexOf(removeStd1)
      student.splice(studentToRemove, 1)
      studentFound = true
    }
}

if (studentFound === false) {
  console.log("Es konnte kein Teilnehmer namens " + removeStd1 + " gefunden werden.")
}
console.log(studentsPerCourse)

//
// Bonus-Aufgabe:
// 
//  c) Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein 
//     Programm, welches diesen neuen Teilnehmern in den Sprachkurs 
//     platziert, der bisher noch am wenigsten Teilnehmer hat.
// 
//     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
//     genau gleich viele Teilnehmer haben? Ist das Verhalten
//     für eine Sprachschule akzeptabel?
