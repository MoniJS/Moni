const { Listener } = require('discord-akairo');
const Logger = require('../../util/Logger');

class ResumeListener extends Listener {
	constructor() {
		super('resumed', {
			emitter: 'client',
			event: 'resumed',
			category: 'client'
		});
	}

	exec(events) {
		Logger.info(`[RESUME] (replayed ${events} events)`);
	}
}

module.exports = ResumeListener;