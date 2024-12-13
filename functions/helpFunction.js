const helpString = `
============================================
              ORGANIZER HELP
============================================

Use the following commands to interact with the organizer:

1️⃣  To display the current state of the organizer:
    👉 organizer show
    OR
    👉 node main.js show "directoryPath"

2️⃣  To organize the files within a specified directory:
    👉 organizer organize
    OR
    👉 node main.js organize "directoryPath"

3️⃣  To display this help message:
    👉 node main.js help

============================================
`

module.exports = function helpFunction() {
    console.log(helpString);
};
