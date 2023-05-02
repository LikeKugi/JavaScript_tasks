const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt');
const anotherWriteStream = fs.createWriteStream('./docs/pipe-new-file.txt');
const compressStream = zlib.createGzip();

readStream.on('data', (chunk) => {
    console.log('-----------------------');
    console.log(chunk.toString());
    writeStream.write('\n\n\n--------CHUNK START--------\n\n\n');
    writeStream.write(chunk);
    writeStream.write(chunk + '\n\n\n--------CHUNK END--------\n\n\n');
})

// another way of implementation RS to WS
readStream.pipe(anotherWriteStream);

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('\n\n\nFinished with error...');
}

// обработка ошибок
readStream
    .on('error', handleError)
    .pipe(compressStream) // сжатие данных
    .pipe(writeStream)
    .on('error', handleError);