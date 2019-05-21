const { Command } = require('discord-akairo');

class KillMeCommand extends Command {
	constructor() {
		super('killme', {
			aliases: ['killme'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Kill Me pls',
				examples: ['']
			}
		});
	}

	exec(message) {
		return message.util.send(`${message.author.username} has died.`).then(msg => {
			setTimeout(() => {
				msg.edit('Respawning...');
			}, 1000);
			setTimeout(() => {
				msg.edit(`Revival complete. Welcome back, ${message.author.username}`);
			}, 1000);
		});
	}
}

module.exports = KillMeCommand;
