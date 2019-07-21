/* eslint-disable no-mixed-spaces-and-tabs */
const { Command } = require('discord-akairo');
const shell = require('shelljs');
const { client } = this;
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
      		 const { stderr, stdout, code } = shell.exec('git pull');
		this.client.inhibitorHandler.removeAll() && this.client.inhibitorHandler.loadAll();
		this.client.listenerHandler.removeAll() && this.client.listenerHandler.loadAll();
		this.client.commandHandler.removeAll() && this.client.commandHandler.loadAll();
		return message.channel.send([
			`${stderr}`,
			`${stdout}`,
			`Process exited with code ${code}`
		], { code: true, split: true });
	}
}

module.exports = PullCommand;