const { Command } = require("discord-akairo");
const request = require("request");

class MemeCommand extends Command {
	constructor() {
		super("meme", {
			aliases: ["meme", "memes"],
			category: "fun",
			channel: "guild",
			clientPermissions: ["SEND_MESSAGES"],
			description: {
				content: "The Most Random Memes",
				examples: [""]
			}
		});
	}

	exec(message) {
		request("https://api-to.get-a.life/meme", { json: true }, (err, res, body) => {
			if (err) return console.log(err);
			return message.util.send(body.url);
		});
	}
}

module.exports = MemeCommand;
