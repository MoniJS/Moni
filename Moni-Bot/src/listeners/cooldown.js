const { Listener } = require('discord-akairo');

class CommandCoolDownListener extends Listener {
    constructor() {
        super('commandcooldown', {
            emitter: 'commandHandler',
            eventName: 'commandCooldown'
        });
    }

    exec(message, command, remaining) {
       message.channel.send(`Please wait ${remaining}ms before trying the (${command}) command.`);
    }
}

module.exports = CommandCoolDownListener;