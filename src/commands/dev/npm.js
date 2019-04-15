const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const moment = require('moment');
require('moment-duration-format');

class NPMCommand extends Command {
	constructor() {
		super('npm', {
			aliases: ['npm', 'npm-package'],
			category: 'dev',
			clientPermissions: ['EMBED_LINKS'],
			args: [
				{
					id: 'pkg',
					prompt: {
						start: 'what NPM pkg would you like to search for?'
					},
					match: 'content',
					type: (_, pkg) => pkg ? encodeURIComponent(pkg.replace(/ /g, '-')) : null
				}
			],
			description: {
				content: 'Responds with information on an NPM package.',
				usage: '<query>',
				examples: ['discord.js', 'discord-akairo', 'node-fetch']
			}
		});
	}

	async exec(message, { pkg }) {
		const res = await fetch(`https://registry.npmjs.com/${pkg}`);
		if (res.status === 404) {
			return message.util.reply('I couldn\'t find the requested information.');
		}
		const body = await res.json();
		if (body.time === undefined) {
			return message.util.reply('commander of this package decided to unpublish it.');
		}
		const version = body.versions[body['dist-tags'].latest];
		const maintainers = this._trimArray(body.maintainers.map(user => user.name).join(', '));
		const dependencies = version.dependencies ? this._trimArray(Object.keys(version.dependencies)) : '';
		const embed = new MessageEmbed()
			.setColor(0xCB0000)
			.setAuthor('NPM', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/')
			.setTitle(body.name)
			.setURL(`https://www.npmjs.com/package/${pkg}`)
			.setDescription(body.description || 'No description.')
			.addField('Version', body['dist-tags'].latest, true)
			.addField('License', body.license || 'None', true)
			.addField('Author', body.author ? body.author.name : '???', true)
			.addField('Creation Date', moment.utc(body.time.created).format('DD-MM-YYYY kk:mm:ss'), true)
			.addField('Modification Date', moment.utc(body.time.modified).format('DD-MM-YYYY kk:mm:ss'), true)
			.addField('Main File', version.main || 'index.js', true)
			.addField('Dependencies', dependencies && dependencies.length ? dependencies.join(', ') : 'None')
			.addField('Maintainers', maintainers);

		if (message.channel.type === 'dm' || !message.channel.permissionsFor(message.guild.me).has(['ADD_REACTIONS', 'MANAGE_MESSAGES'], false)) {
			return message.util.send({ embed });
		}
		return message.util.send({ embed });
	}

	_trimArray(arr) {
		if (arr.length > 10) {
			const len = arr.length - 10;
			arr = arr.slice(0, 10);
		}
		return arr;
	}
}

module.exports = NPMCommand;
