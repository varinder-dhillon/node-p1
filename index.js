const fs = require("fs");

// Read and write in synchronous (Blocking) code
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avacado: ${textIn}. \n Created on ${new Date()}`
// fs.writeFileSync("./txt/input.txt", textOut);
// console.log("file written!!!");

// Read and write in Asynchronous (Non-Blocking) code

fs.readFile("./txt/start.txt", "utf-8", (err, data1)=>{
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2)=>{
        console.log(data2);
        fs.readFile("./txt/append.txt", "utf-8", (err, data3)=>{
            console.log(data1);
            fs.writeFile("./txt/append.txt",  `${data2}\n${data3}`, 'utf-8', err => {
                console.log("File is written!!!", err);
            })
        })
    })
})