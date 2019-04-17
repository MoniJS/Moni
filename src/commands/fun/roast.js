const { Command } = require('discord-akairo');

class RoastCommand extends Command {
	constructor() {
		super('roast', {
			aliases: ['roast'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Send A Random Roast',
				examples: ['']
			}
		});
	}

	exec(message) {
		const roast = require('../../../random/roast.json');
		const randomRoast = roast[Math.floor(Math.random() * roast.length)];
		return message.util.reply(randomRoast);
	}
}

module.exports = RoastCommand;
