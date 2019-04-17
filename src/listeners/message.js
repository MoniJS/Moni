const { Listener } = require('discord-akairo');
const badwords = require('../../random/badwords.json');

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
			if (badwords.some(word => message.content.toLowerCase().includes(word))) {
				try {
					message.delete();
					return message.channel.send(`${message.author}, no bad words Idiot.`);
				} catch {} // eslint-disable-line
			}
		}
	}
}

module.exports = MessageListener;
