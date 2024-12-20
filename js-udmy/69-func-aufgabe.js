"use strict"

// Aufgabe 1
//
// Die Sprachschule, die wir betreuen, hat herausgefunden,
// dass es Funktionen gibt!
// 
// Die Kurse, die aktuell gerade unterrichtet werden,
// sind in der Variable "courses" gespeichert.
// 
// Wir sollen daher ein paar Funktionen schreiben, die die 
// Arbeit mit den Teilnehmern der Kurse erleichtern:
//
// 1a) Ergänze die Funktion, die ermittelt, welcher Kurs
//     bisher am wenigsten Teilnehmer hat. 
//     
//     Wenn 2 Kurse genau gleich viele Teilnehmer haben, ist
//     es egal, welcher Index zurückgegeben wird.
// 
//     Beispiel (für die Variable "courses" von oben): 
//      >> console.log(getSmallestCourse()) 
//      >> Rückgabewert: 0, weil der 1. Kurs (Kurs mit Index 0) am 
//                       wenigsten Teilnehmer hat

const courses = [
    ["Christian", "Annika", "Jochen", "Kickler"], // Kurs 1 mit 2 Teilnehmern
    ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
  ]


function getSmallestCourse() {
    let smallestCourse = -1;
    let smallestIndex = -1;

    for (let i in courses) {
        let course = courses[i]

        if (smallestIndex === -1 || course.length < smallestCourse) {
            smallestIndex = i
            smallestCourse = course.length
        }
    }
    return smallestIndex
}

console.log(getSmallestCourse())

// 1b) Ergänze die Funktion, die einen Teilnehmer in den Kurs
//     einfügt, der bisher am wenigsten Teilnehmer hat!
//     Wir nutzen hier das Ergebnis aus Teilaufgabe 1a weiter!

function addStudent(name) {
  // Hier ermitteln wir, welcher Kurs bisher am wenigsten
  // Teilnehmer hat!
  const smallestCourse = getSmallestCourse()

  // Ergänze den Code hier!
  console.log(smallestCourse + " aufgabe 1b")
  courses[smallestCourse].push(name);

}
addStudent("Franz");
console.log(courses);

// Aufgabe 2
// 
// Mit Hilfe von Funktionen sollen wir ein einfaches Wörterbuch
// entwickeln. 
// 
// Die entsprechenden Sprachbausteine findest du in den Variablen 
// "LANGUAGE_DE" bzw. "LANGUAGE_EN". Das sind übrigends ganz normale
// Variablennamen, und mit der kompletten Großschreibung deuten wir
// für andere Programmierer nochmal zusätzlich an, dass diese Variablen
// nie abgeändert werden sollen.


// Die Indexe stimmen jeweils überein, also LANGUAGE_DE[0] 
// enthält das gleiche Wort in Deutsch, wie LANGUAGE_EN[0]
// auf Englisch.
//
// Hinweis: Der Code den wir hier schreiben, der wird zwangs-
// läufig eher ineffizient. Später lernst du noch mit Objekten
// eine sehr viel "effizientere" Möglichkeit für solche 
// Nachschlage-Aktionen kennen!
//
// 2a) Ergänze die Funktion, die ein einzelnes Wort von 
//     Deutsch nach Englisch übersetzt. Diese Funktion
//     soll das englische Wort über ein "return" 
//     zurückgeben.
//
//     Wichtig: Bitte beachte hier Groß- und Kleinschreibung.
//     Das Wörterbuch liegt ausschließlich in Kleinbuchstaben
//     vor - das Wort, was hier übergeben wird, musst
//     du also noch mit .toLowerCase() umwandeln!
// 
//     Kann ein Wort nicht übersetzt werden, so soll 1:1
//     das deutsche Wort zurückgegeben werden.
//     
//     >> translateWord("Sprachkurs")
//     >> // Rückgabewert: "language course"

const LANGUAGE_DE = [
    "hallo",
    "heute",
    "sprachkurs",
    "willkommen",
    "mikrofon",
    "und"
  ]
  
  const LANGUAGE_EN = [
    "hello",
    "today",
    "language course",
    "welcome",
    "microphone",
    "and"
  ]

function translateWord(word) {
    word = word.toLowerCase()
    let wordIndex = LANGUAGE_DE.indexOf(word);
    if (wordIndex !== -1) {
        return LANGUAGE_EN[wordIndex];
    } else 
    return word
}
console.log(translateWord("Willkommen"));

function translateWord2(word) {
    word = word.toLowerCase();

    for (const i in LANGUAGE_DE) {
        const currentWord = LANGUAGE_DE[i];

        if (currentWord === word) {
            return LANGUAGE_EN[i];
        }         
    }
    return word
}
console.log(translateWord2("Willkommen"));

// 2b) Schreibe eine Funktion, die den ersten Buchstaben eines
//     Wortes in Großbuchstaben umwandeln kann.
// 
//     Bezüglich des Funktionsnamens, uc = uppercase, d.h. 
//     ucFirst = "mach' den ersten Buchstaben in Uppercase"
// 
//     Tipp: Zerlege hierfür das Wort, einmal in den ersten Buchstaben,
//     und einmal in den Rest des Wortes / Strings.
//     
//     Wandle anschließend den ersten Buchstaben in Großbuchstaben um
//     (.toUpperCase()), und baue den String wieder zusammen!
//
//     Beispiel:
//      >> ucFirst("sprachschule")
//      >> // Rückgabewert: "Sprachschule"
//     
//     Das Ergebnis soll per "return" zurückgegeben werden

function ucFirst(word) {

    const firstLetter = word[0]
    const rest = word.slice(1);
    return firstLetter.toUpperCase() + rest
}
console.log(ucFirst("dere oida"))

// 2c) Aufbauend den Funktionen aus 2a und 2b, entwickle eine weitere
//     Funktion, die einen ganzen Satz übersetzen kann!
//     
//     Zerlege dazu den Satz in Wörter, übersetze diese einzeln
//     und setze den Satz wieder zusammen!
//
//     Zudem stelle sicher, dass der erste Buchstabe des Satzes in 
//     Großbuchstaben geschrieben wird!
//
//     Beispiel: 
//     >> translateSentence("Hallo und willkommen beim Sprachkurs")
//     >> // Rückgabewert: "Hello and welcome beim language course"
//
//    Hinweis: 
//      Es geht hier nur um eine "rudimentäre" Übersetzung, das
//      siehst du auch am Sprachfehler, das Wort "beim" wurde einfach 1:1 
//      übernommen. 
//      Tatsächliche Übersetzungstools sind sehr viel komplexer,
//      inzwischen so komplex, dass i.d.R. selbstlernende Programme wie z.B.
//      Neuronale Netze verwendet werden. Die würde man dann aber eher in 
//      C++ oder Python entwickeln als in JavaScript.

const LANGUAGE_DE1 = [
    "hallo",
    "heute",
    "sprachkurs",
    "willkommen",
    "mikrofon",
    "und"
  ]
  
  const LANGUAGE_EN1 = [
    "hello",
    "today",
    "language course",
    "welcome",
    "microphone",
    "and"
  ]

let sentenceToTr = "Hello und willkommen beim Sprachkurs"
/**
 * Input wird auf Englisch übersetzt
 * @param {String} sentence 
 * @returns {String}
 */
function translateSentence(sentence) {

    let words = sentence.toLowerCase().split(" ")

    let wordsEng = [];

    for (const word of words) {
        let wordEng = translateWord(word);
        wordsEng.push(wordEng)
    }
    return ucFirst(wordsEng.join(" "))
}

console.log(translateSentence(sentenceToTr));