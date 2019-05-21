const { Command } = require("discord-akairo");
const Tags = require(process.env.TAGS);

class TagListCommand extends Command {
	constructor() {
		super("tag-list", {
			aliases: ["tags"],
			category: "tags",
			channel: "guild",
			clientPermissions: ["EMBED_LINKS"],
			ratelimit: 2,
			description: { content: "Lists all server tags." }
		});
	}

	async exec(message) {
		const tags = await Tags.findAll({ where: { guild: message.guild.id } });
		const embed = this.client.util.embed().setAuthor(message.guild.name, message.guild.iconURL())
			.setDescription(tags.map(tag => `\`${tag.name}\``).join(", ").substring(0, 2000))
			.setColor("RANDOM");

		if (!tags.length) {
			return message.util.send(`**${message.guild.name}** doesn't have any tags. Why not add some?`);
		}
		return message.util.send(embed);
	}
}

module.exports = TagListCommand;
