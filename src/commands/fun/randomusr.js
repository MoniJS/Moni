const { Command } = require('discord-akairo');

class RandomUsrCommand extends Command {
    constructor() {
        super('RandomUsr', {
            aliases: ['randomusr', 'randomuser'],
            category: 'fun',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Picks A Random Server User',
                usage: 'randomusr',
                examples: ['randomusr', 'randomuser']
            }
        });
    }

    exec(message) {
        return message.reply(`I choose ${message.guild.members.random().displayName}!`);
    }
}

module.exports = RandomUsrCommand;
