const { Command } = require('discord-akairo');

class BanCommand extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            category: 'mod',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES', 'BAN_MEMBERS'],
            description: {
                content: 'Ban Bad People',
                usage: '!ban',
                examples: ['ban @moni', 'ban moni', 'ban 550460160829816833']
            },
            args: [
                {
                    id: 'member',
                    type: 'member'
                }
            ],
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
        });
    }

    exec(message, args) {
        args.memeber = message.mentions.users.first();
        if (!args.member) {
            return message.reply('hey dumb, give me a user to ban via tagging them');
        }
        if (args.member.id === message.channel.guild.ownerID) {
           return 'do you really think I can ban the server owner? Learn how to discord, thanks';
         }
         if (args.member.id === "550460160829816833") {
        return 'not gonna ban myself, thanks';
        }
         args.member.ban().then(() => {
            return message.reply(`${args.member} was banned!`);
        });
    }
}

module.exports = BanCommand;
