const { Command } = require("discord-akairo");

class InviteCommand extends Command {
	constructor() {
		super("invite", {
			aliases: ["invite"],
			category: "general",
			clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			description: {
				content: "Displays the invite link for the bot"
			}
		});
	}

	exec(message) {
		const embed = this.client.util.embed()
			.setColor("RANDOM")
			.setTitle(`Invite ${this.client.user.username} to your server!`)
			.setURL(`https://discordapp.com/oauth2/authorize?client_id=${this.client.user.id}&scope=bot&permissions=8`);
		return message.util.send({ embed });
	}
}

module.exports = InviteCommand;
