"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("js-udmy/json/spacex/launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 


let launchSuccess = 0;
let launchFailure = 0;
let launchesInYear = 0;
const launchYear = "2018";

for (const launch of launches) {
    if (launchYear === launch.launch_year) {
        launchesInYear++;
    }
    if (launchYear === launch.launch_year && launch["launch_success"] === true) {
        launchSuccess++;
    }
    if (launchYear === launch.launch_year && launch["launch_success"] === false) {
        launchFailure++;
    } 
}

console.log("Von " + launchesInYear + " Starts waren " + launchSuccess + " erfolgreich.\nIm Jahr " + launchYear + " gab es " + launchFailure + " Fehlstarts");

//
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

let payloadKg = 0;

for (const launch of launches) {
    const secondStage = launch.rocket.second_stage
    if (launchYear === launch["launch_year"] && launch.launch_success === true) {
        for (const i in secondStage["payloads"]) {
            payloadKg += secondStage["payloads"][i]["payload_mass_kg"]
        }
    } 
}
console.log(payloadKg)


//test
// console.log(launches[0]["rocket"]["second_stage"]["payloads"][0]["payload_mass_kg"])
