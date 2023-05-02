const Logger = require('./log');
const logger = new Logger();

logger.on('some_event', (args) => {
    const {id, text} = args;
    console.log(`{id: ${id}, text: ${text}}`);
})

logger.log('User logged')