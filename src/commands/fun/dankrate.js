const { Command } = require('discord-akairo');

class DankRateCommand extends Command {
	constructor() {
		super('DankRate', {
			aliases: ['dankrate', 'dank'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'See Ur DankRate',
				examples: ['']
			}
		});
	}

	async exec(message) {
		const dankrate = Math.floor(Math.random() * 101);
		const msg = await message.util.reply(`You are ${dankrate}% Dank!!`);
		msg.react('💯');
	}
}

module.exports = DankRateCommand;
