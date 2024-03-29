const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3030;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

    let basePath = '';

    switch (req.url) {
        case '/index.html':
        case '/':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
        case '/about.html':
            res.statusCode = 301;
            res.setHeader('Location', '/contacts.html');
            res.end();
            break;
        case '/contacts.html':
            basePath = createPath('contacts');
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })

})

server.listen(PORT, 'localhost', (err) => {
    err ? console.log(err) : console.log(`Listening ${PORT} port`);
})