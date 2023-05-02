const EventEmitter = require('events');
// ! const util = require('util');

class Logger extends EventEmitter{
    log = (msg) => {
        console.log(msg);
        this.emit('some_event', {id: 1, text: 'event text'});
    }
}
// Another way of inheritance:
// ! util.inherits(Logger, EventEmitter);

module.exports = Logger;