const http = require("http");
const fs = require("fs");




const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end('hololo');
    })
    
});

myserver.listen(3005, () => console.log("Server Started"));
