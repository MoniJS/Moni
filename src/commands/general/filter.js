const { Command } = require('discord-akairo');

class FilterCommand extends Command {
	constructor() {
		super('filter', {
			aliases: ['filter'],
			channel: 'guild',
			category: 'general',
			description: {
				content: 'Toggles bad words filter on the server.'
			}
		});
	}

	exec(message) {
		if (this.client.settings.get(message.guild, 'badwords', true)) {
			this.client.settings.set(message.guild.id, 'badwprds', false);
			return message.util.reply('Successfully disabled bad words filter.');
		}
		this.client.settings.set(message.guild.id, 'badwords', true);
		return message.util.reply('Successfully enabled bad words filter.');
	}
}

module.exports = FilterCommand;
