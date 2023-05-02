const fs = require('fs');

fs.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log(data);

    fs.mkdir('./files', () => {

        fs.writeFile('./files/test-2.txt', `${data}\nNewText!`, (err) => {
            err ? console.log(err) : null;
        });

    });

});

setTimeout(() => {
    if (fs.existsSync('./files/test-2.txt')) {
        console.log('deleting file')
        fs.unlink('./files/test-2.txt', () => {
        });
    }
}, 5000);

setTimeout(() => {
    if (fs.existsSync('./files/')) {
        console.log('deleting directory')
        fs.rmdir('./files', () => {});
    }


}, 8000);

console.log('before file');