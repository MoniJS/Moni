const { Listener } = require('discord-akairo');

class cooldownListener extends Listener {
    constructor() {
        super('cooldown', {
            emitter: 'commandHandler',
            event: 'cooldown'
        });
    }

    exec(message, command, remaining) {
       message.channel.send(`Please wait ${remaining}ms before trying the (${command}) command.`);
    }
}

module.exports = cooldownListener;