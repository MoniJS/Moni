const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('Ping', {
            aliases: ['ping', 'pong'],
            category: 'general',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Ping Info',
                examples: ['']
            }
        });
    }

    exec(message) {
        return message.util.send(new Date().getTime() - message.createdTimestamp + " ms");
    }
}

module.exports = PingCommand;
