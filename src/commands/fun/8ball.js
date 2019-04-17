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
				examples: ['']
			}
		});
	}

	exec(message) {
		const replies = require('../../../random/replies.json');
		const result = Math.floor(Math.random() * replies.length);
		return message.util.reply(replies[result]);
	}
}

module.exports = EightBallCommand;
