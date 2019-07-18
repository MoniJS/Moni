const { Command } = require('discord-akairo');
const createHash = require('create-hash')

class ShaCommand extends Command {
	constructor() {
		super('sha', {
			aliases: ['sha', 'sha256', 'hash'],
			category: 'crypto',
			clientPermissions: ['EMBED_LINKS'],
			description: { content: 'Text to hash.' },
			args: [
				{
					id: 'text',
					type: 'string',
					prompt: {
						start: 'What string would you like to convert ?',
						retry: 'Please provid a valid string.'
					}
				}
			]
		});
	}

	async exec(message, { text }) {
		const s = createHash('sha256').update(text).digest('hex');
		return message.channel.send(`${text} - ${  s}`);
	}
}

module.exports = ShaCommand;
