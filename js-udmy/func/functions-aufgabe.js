"use strict"

const https = require("https");
const http = require("http");

const url = "https://pokeapi.co/api/v2/pokemon/ditto"

https.get(url, res => {

    let data = ""
        res.on("data", chunk => {
//            console.log("chunk" + chunk)
            data+=chunk
        })
        res.on("end", () => {
            const dataAsObj = JSON.parse(data);
            console.log(dataAsObj["abilities"][0])
        })
})