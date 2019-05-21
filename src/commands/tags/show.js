const { Command } = require("discord-akairo");
const Tags = require(process.env.TAGS);
const { Util } = require("discord.js");

class TagShowCommand extends Command {
	constructor() {
		super("tag-show", {
			aliases: ["tag", "tag-show"],
			category: "tags",
			channel: "guild",
			ratelimit: 2,
			args: [
				{
					id: "name",
					match: "content",
					type: "lowercase",
					prompt: {
						start: "what tag would you like to see?"
					}
				}
			],
			description: {
				content: "Displays a tag.",
				usage: "<tag>"
			}
		});
	}

	async exec(message, { name }) {
		if (!name) return;
		name = Util.cleanContent(name, message);

		const tag = await Tags.findOne({ where: { guild: message.guild.id, name } });

		if (tag) await tag.update({ uses: tag.uses + 1 });

		if (!tag) return;

		return message.util.send(tag.content);
	}
}

module.exports = TagShowCommand;
