const { Command } = require('discord-akairo');
const { Util } = require('discord.js');
require('dotenv').config();
const Tags = require(process.env.TAGS);

class TagEditCommand extends Command {
	constructor() {
		super('tag-edit', {
			aliases: ['tag-edit'],
			category: 'tags',
			channel: 'guild',
			ratelimit: 2,
			flags: ['--hoist', '--pin', '--unhoist', '--unpin'],
			description: {
				content: 'Edit a tag (Markdown can be used).',
				usage: '<tag> [--hoist/--unhoist/--pin/--unpin] <content>',
				examples: ['Test Some new content', '"Test 1" Some more new content', 'Test --hoist', '"Test 1" --unpin']
			}
		});
	}

	*args(message) {
		const tag = yield {
			type: async (message, phrase) => {
				if (!phrase) return null;
				const tag = await Tags.findOne({ where: { name: phrase, guild: message.guild.id } });
				if (tag) return tag;
			},
			prompt: {
				start: 'what tag do you want to edit?',
				retry: (message, { phrase }) => `a tag with the name **${phrase}** does not exist.`
			}
		};
		const hoist = yield {
			match: 'flag',
			flag: ['--pin', '--hoist']
		};
		const unhoist = yield {
			match: 'flag',
			flag: ['--unpin', '--unhoist']
		};
		const content = yield (
			hoist || unhoist
				? {
					match: 'rest'
				}
				: {
					match: 'rest',
					prompt: {
						start: 'what should the new content be?'
					}
				}
		);
		return { tag, hoist, unhoist, content };
	}

	async exec(message, { tag, hoist, unhoist, content }) {
		if (tag.user !== message.author.id) {
			return message.util.reply('Losers are only allowed to edit their own tags! Hah hah hah!');
		}
		if (content && content.length >= 1950) {
			return message.util.reply('messages have a limit of 2000 characters!');
		}

		await tag.update({
			content: content ? Util.cleanContent(content, message) : tag.content
		});

		return message.util.reply(`successfully edited **${tag.name}**${hoist ? ' to be hoisted.' : '.'}`);
	}
}

module.exports = TagEditCommand;
