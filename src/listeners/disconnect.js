const { Listener } = require('discord-akairo');
const Logger = require('../../util/Logger');

class DisconnectListener extends Listener {
	constructor() {
		super('disconnect', {
			emitter: 'client',
			event: 'disconnect',
			category: 'client'
		});
	}

	exec(event) {
		Logger.warn(`[DISCONNECT] (${event.code})`);
	}
}

module.exports = DisconnectListener;