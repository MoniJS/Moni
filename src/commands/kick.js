const { Command } = require('discord-akairo');

class KickCommand extends Command {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            args: [
                {
                    id: 'member',
                    type: 'member'
                }
            ],
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS'],
            channelRestriction: 'guild'
        });
    }

    exec(message, args) {
        if (!args.member) {
            return message.reply('No member found with that name.');    
        }

        return args.member.kick().then(() => {
            return message.reply(`${args.member} was kicked!`);
        });
    }
}

module.exports = KickCommand;