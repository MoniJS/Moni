/* eslint-disable multiline-ternary */
const { Listener } = require('discord-akairo');
const Raven = require('raven');

class ErrorListener extends Listener {
	constructor() {
		super('error', {
			emitter: 'commandHandler',
			event: 'error',
			category: 'commandHandler'
		});
	}

	exec(error, message, command) {
		console.log(error);
		if (error) return message.channel.send('Oops, something went wrong');

		Raven.captureBreadcrumb({
			message: 'command_errored',
			category: command ? command.category.id : 'inhibitor',
			data: {
				user: {
					id: message.author.id,
					username: message.author.tag
				},
				guild: message.guild ? {
					id: message.guild.id,
					name: message.guild.name
				} : null,
				command: command ? {
					id: command.id,
					aliases: command.aliases,
					category: command.category.id
				} : null,
				message: {
					id: message.id,
					content: message.content
				}
			}
		});
		Raven.captureException(error);
	}
}

module.exports = ErrorListener;
