const { Command } = require('discord-akairo');

class EightBallCommand extends Command {
    constructor() {
        super('Eightball', {
           aliases: ['8ball'],
        });
    }

    exec(message) {
        let replies = require('../random/replies.json');
        let result = Math.floor((Math.random() * replies.length));
        return message.reply(replies[result]);
    }
}

module.exports = EightBallCommand;