const { Command } = require('discord-akairo');

class DiceCommand extends Command {
	constructor() {
		super('Dice', {
			aliases: ['dice', 'roll'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Roll A 6 Sided Dice',
				examples: ['']
			}
		});
	}

	exec(message) {
		let Roll = require('../../../random/dice.json');
		let randomRoll = Roll[Math.floor(Math.random() * Roll.length)];
		return message.util.send(`#${randomRoll}`);
	}
}

module.exports = DiceCommand;
