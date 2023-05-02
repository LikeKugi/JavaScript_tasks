const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html')

    res.write('<head><link rel="stylesheet" href="#"><title>Server response</title></head>')
    res.write('Hello from server');
    res.write('<p>Simple Text</p>')
    res.end();
})

server.listen(PORT, 'localhost', (err) => {
    err ? console.log(err) : console.log(`Listening ${PORT} port`);
})