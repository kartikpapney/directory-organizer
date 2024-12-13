const types = require("../utility").types;
const path = require("path");
const fs = require("fs");

function organizeFn(directoryPath) {
    // 1. -> check if directory path given is valid
    if (directoryPath == undefined) {
        console.log("Please🙏 input a path");
    } else if (!fs.existsSync(directoryPath)) {
        console.log("Given path is invalid");
    }
    // 2. -> we'll create a folder with name "organize" in this directory
    else {
        console.log("Organizing Your Files, Please wait...");
        let destinationPath = path.join(directoryPath, "organized-files");
        if (!fs.existsSync(destinationPath)) fs.mkdirSync(destinationPath);
        if (fs.existsSync(destinationPath)) {
            organizeFiles(directoryPath, destinationPath);
        }
        console.log("Files Organized Successfully...");
    }
}

function organizeFiles(src, des) {
    // 3. -> identify the categories of all the files in the input path directory
    let files = fs.readdirSync(src);
    for (var file of files) {
        if(path.basename(file) == "organized-files") continue;
        let childrenAddress = path.join(src, file);
        let isFile = fs.lstatSync(childrenAddress).isFile();
        if (isFile) {
            // 4. -> copy the files from directory and paste them to their corresponding folders in organize directory
            const category = getCategory(childrenAddress);
            const categoryPath = path.join(des, category);
            if(!fs.existsSync(categoryPath)) fs.mkdirSync(categoryPath);
            copyFile(childrenAddress, categoryPath);
        } else {
            organizeFiles(childrenAddress, des);
        }
    }
}

function copyFile(src, des) {
    const fileName = path.basename(src);
    const destOfFile = path.join(des, fileName);
    fs.copyFileSync(src, destOfFile);
    // 5. -> delete the file
    // Uncomment if you wan't to delete file from the unorganized folder
    // fs.unlinkSync(src);
}

function getCategory(src) {

    const extension = path.extname(src).slice(1);
    for(var type in types) {
        if(types[type].includes(extension)) return type;
    }
    return "other"
}

module.exports = organizeFn;