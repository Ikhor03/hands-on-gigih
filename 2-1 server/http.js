const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    
    res.end("yuhuuu i'm here!");
});

server.listen(3000, () => {
    console.log("server running ....")
})