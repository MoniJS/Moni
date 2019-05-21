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
				usage: '<member>',
				examples: ['ban @moni', 'ban moni', 'ban 550460160829816833']
			},
			args: [
				{
					id: 'member',
					type: 'member',
					prompt: {
						start: 'what member do you want to ban?',
						retry: 'please provid a valid member.'
					}
				}
			],
			userPermissions: ['BAN_MEMBERS']
		});
	}

	async exec(message, { member }) {
		if (member.id === message.guild.owner.user.id) {
			return message.util.reply('do you really think I can ban the server owner? Learn how to discord, thanks');
		}
		if (member.id === this.client.user.id) {
			return message.util.reply('not gonna ban myself, thanks');
		}

		await member.ban(7, `Banned by ${message.author.tag} (${message.author.id})`).then(() => message.util.reply(`${member} was banned!`));
	}
}

module.exports = BanCommand;
