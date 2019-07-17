const { Command } = require('discord-akairo');

class PullCommand extends Command {
	constructor() {
		super('pull', {
			aliases: ['pull', 'fetch'],
			category: 'owner',
			ownerOnly: true,
			clientPermissions: ['READ_MESSAGES', 'SEND_MESSAGES'],
			description: {
				content: 'Fetch latest src from Github'
			}
		});
	}

	exec(message) {
		  const shell = require ('shelljs');
      		 const {stderr, stdout, code } = shell.exec('git pull');
		return message.channel.send([
			`${stderr}`,
			`${stdout}`,
			`Process exited with code ${code}`
		], { code: true, split: true });
	}
}

module.exports = PullCommand;
