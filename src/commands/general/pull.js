const { Command } = require('discord-akairo');

class PullCommand extends Command {
	constructor() {
		super('pull', {
			aliases: ['pull', 'fetch],
			category: 'general',
			clientPermissions: ['READ_MESSAGES'],
			description: {
				content: 'Fetch latest src from Github'
			}
		});
	}

	exec(message) {
		  const shell = require ('shelljs');
      shell.exec('git pull git@github.com:monijs/moni.git');
	}
}

module.exports = PullCommand;
