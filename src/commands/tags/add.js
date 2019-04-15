const { Command } = require('discord-akairo');
const Tags = require(process.env.TAGS);
const { Util } = require('discord.js');

class TagAddCommand extends Command {
	constructor() {
		super('tag-add', {
			aliases: ['tag-add'],
			category: 'tags',
			channel: 'guild',
			ratelimit: 2,
			args: [
				{
					id: 'name',
					type: async (message, phrase) => {
						if (!phrase) return null;
						phrase = Util.cleanContent(phrase.toLowerCase(), message);
						const tag = await Tags.findOne({ where: { name: phrase, guild: message.guild.id } });
						if (tag) return null;
						return phrase;
					},
					prompt: {
						start: 'what should the tag be named?',
						retry: 'this tag already exist.'
					}
				},
				{
					id: 'content',
					match: 'rest',
					prompt: {
						start: 'what should the content of the tag be?'
					}
				},
				{
					id: 'hoist',
					match: 'flag',
					flag: ['--hoist', '--pin']
				}
			],
			description: {
				content: 'Adds a tag, usable for everyone on the server (Markdown can be used).',
				usage: '[--hoist] <tag> <content>',
				examples: ['Test Test', '--hoist "Test 2" Test2', '"Test 3" "Some more text" --hoist']
			}
		});
	}

	async exec(message, { name, content, hoist }) {
		if (name && name.length >= 256) {
			return message.util.reply('messages have a limit of 256 characters!');
		}
		if (content && content.length >= 1950) {
			return message.util.reply('messages have a limit of 2000 characters!');
		}

		await Tags.create({
			name,
			content,
			user: message.author.id,
			guild: message.guild.id
		});

		return message.util.reply(`a tag with the name **${name.substring(0, 256)}** has been added.`);
	}
}

module.exports = TagAddCommand;
