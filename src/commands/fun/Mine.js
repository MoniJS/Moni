/* eslint-disable radix */
const { Command } = require('discord-akairo');
const Minesweeper = require('discord.js-minesweeper');

class MineCommand extends Command {
	constructor() {
		super('mine', {
			aliases: ['mine'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Mine Sweeper with spoiler tags',
				examples: ['']
			},
			args: [
				{
					id: 'args0',
					match: 'content'
				},
				{
					id: 'args1',
					match: 'content'
				},
				{
					id: 'args2',
					match: 'content'
				}
			]
		});
	}

	exec(message, { args0, args1, args2 }) {
		const rows = parseInt(args0);
		const columns = parseInt(args1);
		const mines = parseInt(args2);

		if (!rows) {
			return message.channel.send(':warning: Please provide the number of rows.');
		}

		if (!columns) {
			return message.channel.send(':warning: Please provide the number of columns.');
		}

		if (!mines) {
			return message.channel.send(':warning: Please provide the number of mines.');
		}

		const minesweeper = new Minesweeper({ rows, columns, mines });
		const matrix = minesweeper.start();

		return matrix ? message.channel.send(matrix) : message.channel.send(':warning: You have provided invalid data.');
	}
}

module.exports = MineCommand;
