//CRUD

//RESTFUL API
//web services api

//craete => post
//read  => get
//update => put
//delete  => delete


const http = require('http');

const hostName = 'localhost';
const port = 8000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world...");
})

server.listen(port, hostName, ()=> console.log(`Server is running on ${hostName} port:${port}`));
