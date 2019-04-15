const { Command } = require('discord-akairo');

class YomamaCommand extends Command {
	constructor() {
		super('yomama', {
			aliases: ['yomama'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Get A Random YoMama Joke.',
				examples: ['']
			}
		});
	}

	exec(message) {
		let joke = require('../../../random/yomama.json');
		let randomQ = joke[Math.floor(Math.random() * joke.length)];
		return message.util.send(randomQ);
	}
}

module.exports = YomamaCommand;
