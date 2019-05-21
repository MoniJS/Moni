const { Command } = require('discord-akairo');
const fetch = require('node-fetch');
const qs = require('querystring');

class UrbanCommand extends Command {
	constructor() {
		super('urban', {
			aliases: ['urban'],
			category: 'general',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Searchs Urban Dictionary',
				examples: ['hello world']
			},
			args: [
				{
					id: '_query',
					content: 'match'
				}
			]
		});
	}

	async exec(message, { _query }) {
		if (!_query) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = qs.stringify({ term: _query });
		const body = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
			.then(response => response.json());

		if (!body.list) {
			return message.channel.send(`No results found for **${_query}**.`);
		}

		const [answer] = body.list;
		const embed = this.client.util.embed()
			.setColor('RANDOM')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', answer.definition.substring(0, 1024))
			.addField('Example', answer.example.substring(0, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);
		return message.channel.send(embed);
	}
}

module.exports = UrbanCommand;
