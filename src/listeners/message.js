const { Listener } = require('discord-akairo');
// const badwords = require('../../random/badwords.json');
const profanities = require('profanities');

class MessageListener extends Listener {
	constructor() {
		super('message', {
			event: 'message',
			emitter: 'client',
			category: 'client'
		});
	}

	exec(message) {
		if (this.client.settings.get(message.guild, 'badwords', true)) {
			for (x = 0; x < profanities.length; x++) {
				if (message.content.toUpperCase() === profanities[x].toUpperCase()) {
					return message.channel.send('Hey! Don\'t say that');
					message.delete();
				}
			}
		}
	}
}

module.exports = MessageListener;
