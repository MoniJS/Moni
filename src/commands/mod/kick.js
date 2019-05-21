const { Command } = require('discord-akairo');

class KickCommand extends Command {
	constructor() {
		super('kick', {
			aliases: ['kick'],
			category: 'mod',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES', 'KICK_MEMBERS'],
			description: {
				content: 'Kick Bad People',
				usage: '<member>',
				examples: ['kick @Moni', 'kick Suvajit', 'kick 550460160829816833']
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
			userPermissions: ['KICK_MEMBERS']
		});
	}

	async exec(message, { member }) {
		await member.kick(`Kicked by ${message.author.tag} (${message.author.id})`).then(() => message.util.reply(`${member} was kicked!`));
	}
}

module.exports = KickCommand;
