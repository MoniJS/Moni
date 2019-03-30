const { Listener } = require('discord-akairo');

class ErrorListener extends Listener {
    constructor() {
        super('error', {
            emitter: 'commandHandler',
            event: 'error'
        });
    }

    exec(message) {
    message.channel.send("Oops, something went wrong")
    message.channel.send("Try again");
    }
}

module.exports = ErrorListener;