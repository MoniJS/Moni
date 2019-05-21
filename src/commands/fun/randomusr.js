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
				examples: ['']
			}
		});
	}

	exec(message) {
		return message.util.reply(`I choose ${message.guild.members.random().displayName}!`);
	}
}

module.exports = RandomUsrCommand;
