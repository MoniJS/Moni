/* eslint-disable multiline-ternary */
const { Listener } = require('discord-akairo');
const Raven = require('raven');

class CommandStartedListener extends Listener {
	constructor() {
		super('commandstarted', {
			emitter: 'commandHandler',
			event: 'commandStarted',
			category: 'commandHandler'
		});
	}

	exec(message, command, args) {
		console.log({
			time: message.createdAt,
			command: command.id,
			guild: message.guild ? `${message.guild.name} (${message.guild.id})` : 'DM',
			user: `${message.author.tag} (${message.author.id})`,
			args: message.content
		});

		Raven.captureBreadcrumb({
			message: 'command_started',
			category: command.category.id,
			data: {
				user: {
					id: message.author.id,
					username: message.author.tag
				},
				guild: message.guild ? {
					id: message.guild.id,
					name: message.guild.name
				} : null,
				command: {
					id: command.id,
					aliases: command.aliases,
					category: command.category.id
				},
				message: {
					id: message.id,
					content: message.content
				},
				args
			}
		});
		Raven.setContext({
			user: {
				id: message.author.id,
				username: message.author.tag
			},
			extra: {
				guild: message.guild ? {
					id: message.guild.id,
					name: message.guild.name
				} : null,
				command: {
					id: command.id,
					aliases: command.aliases,
					category: command.category.id
				},
				message: {
					id: message.id,
					content: message.content
				},
				args
			}
		});
	}
}

module.exports = CommandStartedListener;
