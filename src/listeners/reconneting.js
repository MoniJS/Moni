const { Listener } = require('discord-akairo');
const Logger = require('../../util/Logger');

class ReconnectListener extends Listener {
	constructor() {
		super('reconnecting', {
			emitter: 'client',
			event: 'reconnecting',
			category: 'client'
		});
	}

	exec() {
		Logger.info("[RECONNECTING]");
	}
}

module.exports = ReconnectListener;