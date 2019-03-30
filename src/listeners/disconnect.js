const { Listener } = require('discord-akairo');

class DisconnectListener extends Listener {
	constructor() {
		super('disconnect', {
			emitter: 'client',
			event: 'disconnect',
			category: 'client'
		});
	}

	exec(event) {
		console.log(`[DISCONNECT] (${event.code})`);
	}
}

module.exports = DisconnectListener;