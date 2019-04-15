const { Argument, Command } = require('discord-akairo');

class PrefixCommand extends Command {
	constructor() {
		super('prefix', {
			aliases: ['prefix'],
			category: 'general',
			channel: 'guild',
			quoted: false,
			userPermissions: ['MANAGE_GUILD'],
			description: {
				content: [
					'Displays or changes the prefix of the guild.',
					'The prefix must not contain spaces and be below 2 characters.'
				],
				usage: '<prefix>',
				examples: ['!', '?']
			}
		});
	}

	async *args() {
		const prefix = yield {
			match: 'content',
			type: Argument.validate('string', (_, p) => !/\s/.test(p) && p.length <= 2)
		};
		return { prefix };
	}

	async exec(message, { prefix }) {
		if (!prefix) return message.util.send(`The current prefix for this guild is: \`${this.handler.prefix(message)}\``);
		this.client.settings.set(message.guild, 'prefix', prefix);
		if (prefix === this.handler.prefix(message)) {
			return message.util.reply(`the prefix has been reset to \`${prefix}\``);
		}
		return message.util.reply(`the prefix has been set to \`${prefix}\``);
	}
}

module.exports = PrefixCommand;
