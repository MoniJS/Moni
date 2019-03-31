const { Listener } = require('discord-akairo');

class ErrorListener extends Listener {
    constructor() {
        super('error', {
            emitter: 'commandHandler',
            event: 'error',
            category: 'commandHandler'
        });
    }

    exec(error, message, command) {
        console.log(error);
        try {
            return message.channel.send([
                `Oops, something went wrong`,
                `Try again.`
            ])
        } catch {}
    }
}

module.exports = ErrorListener;