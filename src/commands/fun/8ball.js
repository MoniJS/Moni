const { Command } = require('discord-akairo');

class EightBallCommand extends Command {
    constructor() {
        super('Eightball', {
           aliases: ['8ball'],
           category: 'fun',
          channel: 'guild',
          clientPermissions: ['SEND_MESSAGES'],
          description: {
              content: 'See the 8Ball',
              usage: '!8ball',
              examples: ['8ball will i win the lottery', '8ball will i die', '8ball is this bot cool']
         }
        });
    }

    exec(message) {
        let replies = require('../../random/replies.json');
        let result = Math.floor((Math.random() * replies.length));
        return message.reply(replies[result]);
    }
}

module.exports = EightBallCommand;
