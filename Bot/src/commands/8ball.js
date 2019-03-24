const { Command } = require('discord-akairo');

class EightBallCommand extends Command {
    constructor() {
        super('Eightball', {
           aliases: ['8ball'] 
        });
    }

    exec(message) {
        const args = message.content.slice(['.', '!']).split(/ +/);
      if(!args[2]) return message.reply('Please ask a full Question!');
    let replies = require('../random/replies.json');

     let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

        message.reply(replies[result]);
    }
}

module.exports = EightBallCommand;