const { Listener } = require('discord-akairo');

class ResumeListener extends Listener {
	constructor() {
		super('resumed', {
			emitter: 'client',
			event: 'resumed',
			category: 'client'
		});
	}

	exec(events) {
		console.log(`[RESUME] (replayed ${events} events)`);
	}
}

module.exports = ResumeListener;