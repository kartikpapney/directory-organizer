const path = require("path");
const fs = require("fs");
const chalk = require('chalk');

function showFiles(directoryPath, spaces, dots) {
    const childrenAddress = fs.readdirSync(directoryPath);
    const parentFolder = path.basename(directoryPath);
    console.log(spaces + chalk.red("└" + ("─".repeat((dots+"").length - 1))) + chalk.green(chalk.bold(parentFolder)));
    for(var children of childrenAddress) {
        const childrenAddress = path.join(directoryPath, children);
        if(fs.lstatSync(childrenAddress).isFile()) {
            console.log(spaces + dots + chalk.red("├" + "─".repeat(path.basename(parentFolder).length - 1)) + chalk.green(path.basename(childrenAddress)));
        } else {
            showFiles(childrenAddress, spaces + dots, " ".repeat(path.basename(parentFolder).length));
        } 
    } 
}

function showFn(directoryPath) {
    // 1. -> check if directory path given is valid
    if (directoryPath == undefined) {
        console.log("Please🙏 input a path");
    } else if (!fs.existsSync(directoryPath)) {
        console.log("Given path is invalid");
    }
    // 2. -> we'll create a folder with name "organize" in this directory
    else {
        const parentFolder = path.basename(directoryPath);
        showFiles(directoryPath, "\t", " ".repeat((parentFolder + "").length - 1));
    }
}

module.exports = showFn;