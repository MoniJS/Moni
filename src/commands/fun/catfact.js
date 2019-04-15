const { Command } = require('discord-akairo');

class CatFactCommand extends Command {
	constructor() {
		super('CatFact', {
			aliases: ['catfacts', 'catfact'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Cat Facts',
				examples: ['']
			}
		});
	}

	exec(message) {
		let facts = require('../../../random/catfact.json');
		return message.util.send(facts[Math.floor(Math.random() * facts.length)]);
	}
}

module.exports = CatFactCommand;
