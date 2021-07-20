#!/usr/bin/env node

const showFunction = require("./functions/showFunction");
const helpFunction = require("./functions/helpFunction");
const organizeFunction = require("./functions/organizeFunction");

let inputArray = process.argv.slice(2);

// node main.js show "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArray[0];
switch (command) {
    case "show":
        showFunction(process.cwd());
        break;
    case "organize":
        organizeFunction(process.cwd());
        break;
    case "help":
        helpFunction();
        break;
    default:
        console.log("Please🙏 imput a valid command");
}