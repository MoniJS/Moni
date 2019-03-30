const { Command } = require('discord-akairo');

class RandomUsrCommand extends Command {
    constructor() {
        super('RandomUsr', {
           aliases: ['randomusr', 'randomuser']
        });
    }

    exec(message) {
         return message.reply(`I choose ${message.guild.members.random().displayName}!`);
    }
}

module.exports = RandomUsrCommand;