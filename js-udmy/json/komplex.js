"use strict"

const fs = require("fs");
const rocketsAsString = fs.readFileSync("js-udmy/json/spacex/rockets.json", {encoding: "utf-8"});

const rockets = JSON.parse(rocketsAsString)

let rocketArray = []

for (const rocket of rockets) {
    let curRocket = rocket.rocket_name
    rocketArray.push(curRocket)
}
console.log(rocketArray)


let rocketArray2 = [];

for (const rocket of rockets) {
    rocketArray2.push({"Name": rocket.rocket_name, "Engine": rocket.engines.type, "Engines Sea Level": rocket["engines"]["thrust_sea_level"]["lbf"]});
}
console.log(rocketArray2[1].Name)