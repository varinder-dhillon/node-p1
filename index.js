const fs = require("fs");

// Blocking, synchronous code
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avacado: ${textIn}. \n Created on ${new Date()}`
fs.writeFileSync("./txt/input.txt", textOut);
console.log("file written!!!");