const { Listener } = require('discord-akairo');

class commandBlockedListener extends Listener {
    constructor() {
        super('commandBlocked', {
            emitter: 'commandHandler',
            event: 'commandBlocked'
        });
    }

    exec(message, command, args) {
    message.channel.send("Oops, it looks like this command is Owner Only, Sorry.");
    }
}

module.exports = commandBlockedListener;