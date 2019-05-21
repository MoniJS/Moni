/* eslint-disable new-cap */
const eco = require("discord-economy");
const { Command } = require("discord-akairo");

class TransferCommand extends Command {
	constructor() {
		super("transfer", {
			aliases: ["transfer", "send"],
			category: "economy",
			channel: "guild",
			clientPermissions: ["SEND_MESSAGES"],
			description: {
				content: "Send Coins to Discord Users, Not Bots",
				examples: ["Suvjait 100"]
			},
			args: [
				{
					id: "member",
					type: "member",
					prompt: {
						start: "who is the member?",
						retry: "please provide a member."
					}
				},
				{
					id: "amount",
					match: "content",
					type: "number",
					prompt: {
						start: "please provide a number.",
						retry: "please provide a valid number."
					}
				}
			]
		});
	}

	async exec(message, { member, amount }) {
		const { user } = member;
		if (!user) return message.reply("You can send money to **nobody**, please mention someone");
		if (!amount) return message.reply("Umm... You want to send 0 coins, specify how much you want to send.");

		let output = await eco.FetchBalance(message.author.id);
		if (output.balance < amount) return message.reply("You cant send an amount that is bigger that your balance.");

		let transfer = await eco.Transfer(message.author.id, user.id, amount);
		return message.reply([
			"🎉 Sucess!!",
			`Balance from ${message.author.tag}: ${transfer.FromUser}`,
			`Balance from ${user.tag}: ${transfer.ToUser}`
		]);
	}
}

module.exports = TransferCommand;
