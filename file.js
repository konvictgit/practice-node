const fs = require("fs");


//syncro...
//fs.writeFileSync('./test.txt','Heey there');

//async
// fs.watchFile("./test.txt","Heloooo",(err) => {} );


const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);