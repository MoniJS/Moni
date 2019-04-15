/* eslint-disable new-cap */
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class DailyCommand extends Command {
	constructor() {
		super('Daily', {
			aliases: ['daily'],
			category: 'economy',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Get your daily bonus',
				examples: ['@Moni#2030 daily']
			}
		});
	}

	async exec(message) {
		let output = await eco.Daily(message.author.id);

		if (output.updated) {
			let profile = await eco.AddToBalance(message.author.id, 100);
			return message.reply(`Nice job checking in today for you coins. You now have ${profile.newbalance} coins.`);
		}
		return message.channel.send(`Hey! You. :rage: Trying to cheat the system. Nope.\nYour next daily will be in ${output.timetowait}`);
	}
}

module.exports = DailyCommand;
