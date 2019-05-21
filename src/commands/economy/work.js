const eco = require("discord-economy");
const { Command } = require("discord-akairo");

class WorkCommand extends Command {
	constructor() {
		super("work", {
			aliases: ["work"],
			category: "economy",
			channel: "guild",
			clientPermissions: ["SEND_MESSAGES"],
			description: {
				content: "Work for Coins",
				examples: [""] // I would never delete my coins lul
			}
		});
	}

	async exec(message) {
		// eslint-disable-next-line new-cap
		let output = await eco.Work(message.author.id, {
			failurerate: 5,
			money: Math.floor(Math.random() * 1000),
			jobs: require("../../../random/jobs.json")
		});
		// 10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
		if (output.earned === 0) return message.reply("Gotta work harder, dont give up, and do cheat.");

		return message.channel.send([
			`${message.author.username}`,
			`You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}`,
			`You now own :money_with_wings: ${output.balance}`
		]);
	}
}

module.exports = WorkCommand;
