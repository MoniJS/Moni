const { Command } = require('discord-akairo');

class RestartCommand extends Command {
	constructor() {
		super('restart', {
			aliases: ['restart'],
			category: 'owner',
			ownerOnly: true,
			quoted: false,
			description: {
				content: 'Restarts Bot',
				usage: ''
			}
		});
	}

	exec() {
		process.exit();
	}
}

module.exports = RestartCommand;
