const { Command } = require('discord-akairo');

class CrashCommand extends Command {
    constructor() {
        super('Crash', {
           aliases: ['crash'],
           category: 'fun',
           channel: 'guild',
           clientPermissions: ['SEND_MESSAGES'],
           description: {
               content: 'Try Me',
               usage: '!crash',
               examples: ['crash']
        });
    }

    exec(message) {
       return message.channel.send(`Wow. That's awful of you, ${message.author.username}. I'm just here trying to be helpful and make friends but you want to shut me down. Quite rude!`);
    }
}

module.exports = CrashCommand;
