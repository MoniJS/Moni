const { Command } = require('discord-akairo');
const { Util, MessageEmbed } = require('discord.js');


class RestartCommand extends Command {
	constructor() {
		super('restart', {
			aliases: ['restart'],
			category: 'owner',
			ownerOnly: true,
			quoted: false,
			description: {
				content: 'Restarts Bot',
				usage: '!restart'
			}
		});
	}

	async exec(message) {
		process.exit();
	}
}

module.exports = RestartCommand;
