const { Command } = require('discord-akairo');

class SayCommand extends Command {
    constructor() {
        super('say', {
            aliases: ['echo', 'say'],
            category: 'fun',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Say Something',
                usage: '!say',
                examples: ['say Hello', 'echo Hello']
            },
            args: [
                {
                    id: 'msg',
                    match: 'content',
                    default: 'hey say something, before I give up on you'
                }
            ]
        });
    }

    exec(message, { msg }) {
        return message.channel.send(msg);
    }
}

module.exports = SayCommand;
