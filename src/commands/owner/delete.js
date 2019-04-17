/* eslint-disable new-cap */
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class DeleteCommand extends Command {
	constructor() {
		super('delete', {
			aliases: ['delete'],
			category: 'owner',
			ownerOnly: true,
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Delete all ur coins 😂',
				examples: ['Moni#3701'] // I would never delete my coins lul
			},
			args: [
				{
					id: 'member',
					type: 'member',
					prompt: {
						start: 'who is the member?',
						retry: 'please mention a valid member.'
					}
				}
			]
		});
	}

	async exec(message, { member }) {
		const { user } = member;
		if (!user) return message.reply('Tell me who to delete you stupid.');
		const output = await eco.Delete(user.id);
		if (output.deleted === true) return message.reply('Succesfully deleted the user out of the database!');
		return message.reply('Error: Could not find the user in database.');
	}
}

module.exports = DeleteCommand;
