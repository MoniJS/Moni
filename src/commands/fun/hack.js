const { Command } = require("discord-akairo");

class HackCommand extends Command {
	constructor() {
		super("Hack", {
			aliases: ["hack"],
			category: "fun",
			channel: "guild",
			clientPermissions: ["SEND_MESSAGES"],
			description: {
				content: "Ummm. Hack Someone",
				usage: "<member>",
				examples: ["", "hack @Moni", "hack Moni"]
			},
			args: [
				{
					id: "member",
					type: "member",
					default: message => message.member
				}
			]
		});
	}

	exec(message, { member }) {
		return message.util.send(`Initializing the hack on ${member} `).then(msg => {
			setTimeout(() => {
				msg.edit("Downloading Hacks...");
			}, 2000);
			setTimeout(() => {
				msg.edit("Finding Facebook Login...");
			}, 4000);
			setTimeout(() => {
				msg.edit("Found Facebook Login & Password");
			}, 7000);
			setTimeout(() => {
				msg.edit("Injecting hack.exe");
			}, 9000);
			setTimeout(() => {
				msg.edit("Downloading User Data...");
			}, 12000);
			setTimeout(() => {
				msg.edit("Selling data on Dark Web");
			}, 15000);
			setTimeout(() => {
				msg.edit("Stealing 134.432545 Bitcoins ");
			}, 18000);
			setTimeout(() => {
				msg.edit("Sending BitCoins to Ip Address : 12.3.456.789.0");
			}, 23000);
			setTimeout(() => {
				msg.edit("Hiring Bomb Squad");
			}, 27000);
			setTimeout(() => {
				msg.edit(` ${message.author} Murdered ${member}`);
			}, 32000);
		});
	}
}

module.exports = HackCommand;
