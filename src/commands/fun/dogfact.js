const { Command } = require("discord-akairo");

class DogFactCommand extends Command {
	constructor() {
		super("DogFact", {
			aliases: ["dogfacts", "dogfact"],
			category: "fun",
			channel: "guild",
			clientPermissions: ["SEND_MESSAGES"],
			description: {
				content: "Dogge Facts",
				examples: [""]
			}
		});
	}

	exec(message) {
		const facts = require("../../../random/dogfact.json");
		return message.util.send(facts[Math.floor(Math.random() * facts.length)]);
	}
}

module.exports = DogFactCommand;
