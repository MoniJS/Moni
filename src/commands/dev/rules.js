const { Command } = require("discord-akairo");

class RulesCommand extends Command {
	constructor() {
		super("rules", {
			aliases: ["rules", "rule"],
			category: "dev",
			channel: "guild",
			clientPermissions: ["SEND_MESSAGES"],
			description: {
				content: "Rules To Use This Bot",
				examples: [""]
			}
		});
	}

	exec(message) {
		const embed = this.clien.util.embed()
			.setColor("RANDOM")
			.setTitle("Rules")
			.setURL("https://github.com/moni-js/Moni")
			.setAuthor("Moni", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emoji-one/64/white-heavy-check-mark_2705.png")
			.setDescription("By using Moni, you agree to these rules. If you break any rules, we reserve the right to ban you from Moni")
			.setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/emoji-one/44/warning-sign_26a0.png", true)
			.addBlankField()
			.addField("Rule #1", "Userbots, spamming, and macros are forbidden", true)
			.addField("Rule #2", "Sharing exploits is forbidden", true)
			.addField("Rule #3", "Offensive/advertising names on the leaderboard will be wiped and blacklisted", true)
			.addField("Rule #4", "Do not use the bot for racism, homophobia, or advertising", true)
			.setTimestamp()
			.setFooter("Dont break the rule or be BANNED", "https://cdn.discordapp.com/avatars/550460160829816833/8ff23522610d174c4fc418613130d51c.png");

		return message.util.send(embed);
	}
}

module.exports = RulesCommand;
