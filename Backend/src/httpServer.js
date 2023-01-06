const http = require('http');

const port = 4200;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader ("Contet-Type", "text/plain");
    response.end('BONK!\n');
});

server.listen(port, () => {
    console.log('Oh yeah! BONK!');
})