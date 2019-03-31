const { Listener } = require('discord-akairo');

class CommandStartedListener extends Listener {
    constructor() {
        super('commandstarted', {
            emitter: 'commandHandler',
            event: 'commandStarted',
            category: 'commandHandler'
        });
    }

    exec(message, command, args) {
        console.log({
            time: message.createdAt,
            command: command.id,
            guild: message.guild ? `${message.guild.name} (${message.guild.id})` : 'DM',
            user: `${message.author.tag} (${message.author.id})`,
            args: message.content
        })
    }
}

module.exports = CommandStartedListener;