const { Command } = require('discord-akairo');

class KillMeCommand extends Command {
    constructor() {
        super('killme', {
            aliases:  ['killme'],
            category: 'fun',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Kill Me pls',
                usage: '!killme',
                examples: ['killme']
            }
        });
    }

    exec(message) {
        return message.util.send(`${message.author.username} has died.`).then(Message => {
            setTimeout(() => { Message.edit("Respawning..."); }, 1000);
            setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${message.author.username}`); }, 1000);
        });
    }
}

module.exports = KillMeCommand;
