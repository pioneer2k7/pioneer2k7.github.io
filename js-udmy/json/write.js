"use strict"

const data = [
    {firstname: "Max", age: 21, enrolled: true},
    {firstname: "Laura", age: 35, enrolled: false}
]
const dataAsJson = JSON.stringify(data);

const fs = require('fs');
fs.writeFileSync("js-udmy/json/write.json", dataAsJson);