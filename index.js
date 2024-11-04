const fs = require("fs");
const http = require('http');
// const url = require('url')
/////////////////////////\
// File reading

// Read and write in synchronous (Blocking) code
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avacado: ${textIn}. \n Created on ${new Date()}`
// fs.writeFileSync("./txt/input.txt", textOut);
// console.log("file written!!!");

// Read and write in Asynchronous (Non-Blocking) code

// fs.readFile("./txt/start.txt", "utf-8", (err, data1)=>{
//     console.log(data1);
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2)=>{
//         console.log(data2);
//         fs.readFile("./txt/append.txt", "utf-8", (err, data3)=>{
//             console.log(data1);
//             fs.writeFile("./txt/append.txt",  `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log("File is written!!!", err);
//             })
//         })
//     })
// })



/////////////////////////\
// server
const productsData = fs.readFileSync(`./dev-data/data.json`, "utf-8");
// const productsData = JSON.parse(data);
console.log("__dirname", __dirname);

const server = http.createServer((req, res) => {
    console.log("asdasdas", req.url);
    if(req.url === "/" || req.url === "/overview"){
        res.end("This is home page :) !!!")
    }else if(req.url === "/product") {
        res.end("This is product page :) !!!")
    }else if(req.url === "/api"){
        res.writeHead(200, {
            'Content-type' : 'application/json'
        })
        res.end(productsData);
    }else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'custom-header': 'this is custom header'
        })
        res.end("The requested page is not found!!! :(")
    }
});

server.listen(8000, "localhost", ()=>{
    console.log("Listening requests on port 8000");
})