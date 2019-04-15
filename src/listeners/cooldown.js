const { Listener } = require('discord-akairo');

class cooldownListener extends Listener {
	constructor() {
		super('cooldown', {
			emitter: 'commandHandler',
			event: 'cooldown',
			category: 'client'
		});
	}

	exec(message, command, remaining) {
		try {
			return message.channel.send(`Please wait ${remaining}ms before trying the (${command}) command.`);
		} catch {} // eslint-disable-line 
	}
}

module.exports = cooldownListener;
