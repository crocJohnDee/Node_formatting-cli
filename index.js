const formatting = require("./formatting");
const help = require("./messaging");

const str = formatting.capitalizeInitial(formatting.trim(process.argv[2]));
const arr = process.argv;

if (arr.includes("--help")) {
    help.showHelp();
}

console.log(str);









