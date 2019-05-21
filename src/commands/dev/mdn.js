const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const qs = require("querystring");
const Turndown = require("turndown");

class MDNCommand extends Command {
	constructor() {
		super("mdn", {
			aliases: ["mdn", "mozilla-developer-network"],
			category: "dev",
			clientPermissions: ["EMBED_LINKS"],
			args: [
				{
					id: "query",
					prompt: {
						start: "what would you like to search for?"
					},
					match: "content",
					type: (_, query) => query ? query.replace(/#/g, ".prototype.") : null
				}
			],
			description: {
				content: "Searches MDN for your query.",
				usage: "<query>",
				examples: ["Map", "Map#get", "Map.set"]
			}
		});
	}

	async exec(message, { query, match }) {
		if (!query && match) query = match[1];
		const queryString = qs.stringify({ q: query });
		const res = await fetch(`https://mdn.pleb.xyz/search?${queryString}`);
		const body = await res.json();
		if (!body.URL || !body.Title || !body.Summary) {
			return message.util.reply("I couldn't find the requested information.");
		}
		const turndown = new Turndown();
		turndown.addRule("hyperlink", {
			filter: "a",
			replacement: (text, node) => `[${text}](https://developer.mozilla.org${node.href})`
		});
		// eslint-disable-next-line no-useless-escape
		const summary = body.Summary.replace(/<code><strong>(.+)<\/strong><\/code>/g, "<strong><code>$1<\/code><\/strong>");

		const embed = new MessageEmbed()
			.setColor(0x066FAD)
			.setAuthor("MDN", "https://i.imgur.com/DFGXabG.png", "https://developer.mozilla.org/")
			.setURL(`https://developer.mozilla.org${body.URL}`)
			.setTitle(body.Title)
			.setDescription(turndown.turndown(summary));

		return message.util.send({ embed });
	}
}

module.exports = MDNCommand;
