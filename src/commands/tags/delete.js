const { Command } = require('discord-akairo');
const Tags = require(process.env.TAGS);
require('dotenv').config();
const { Util } = require('discord.js');

class TagDeleteCommand extends Command {
	constructor() {
		super('tag-delete', {
			aliases: ['tag-delete'],
			category: 'tags',
			channel: 'guild',
			ratelimit: 2,
			args: [
				{
					id: 'tag',
					type: async (message, phrase) => {
						if (!phrase) return null;
						phrase = Util.cleanContent(phrase.toLowerCase(), message);
						const tag = await Tags.findOne({ where: { name: phrase, guild: message.guild.id }});
						if (tag) return tag;
					},
					prompt: {
						start: `what tag do you want to delete?`,
						retry: (message, { phrase }) => `a tag with the name **${phrase}** does not exist.`
					}
				}
			],
			description: {
				content: 'Deletes a tag.',
				usage: '<tag>'
			}
		});
	}

	async exec(message, { tag }) {

		if (tag.user !== message.author.id) return message.util.reply('you can only delete your own tags.');
		await tag.destroy();

		return message.util.reply(`successfully deleted **${tag.name.substring(0, 256)}**.`);
	}
}

module.exports = TagDeleteCommand;
