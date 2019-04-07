const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('Ping', {
            aliases: ['ping'],
            category: 'general',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Ping Info',
                usage: '!ping',
                examples: ['ping']
            }
        });
    }

    exec(message) {
        return message.util.send(new Date().getTime() - message.createdTimestamp + " ms");
    }
}

module.exports = PingCommand;
