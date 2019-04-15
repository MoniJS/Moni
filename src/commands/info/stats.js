const moment = require('moment');
require('moment-duration-format');
const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const Akairo = require('discord-akairo');
const { version } = require('../../../package.json');
const os = require('os-utils');

class BotInfoCommand extends Command {
	constructor() {
		super('stats', {
			aliases: ['stats'],
			category: 'info',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
			description: {
				content: 'Displays statistics about the bot'
			}
		});
	}

	exec(message) {
		const devs = ['447916021198749696', '444432489818357760'].map(id => this.client.users.get(id).tag);
		const embed = new Discord.MessageEmbed()
	    .setColor('RANDOM')
			.setAuthor(`${this.client.user.username} Statistics`)
			.addField('Bot Devs', devs.join(' | '))
			.addField('Memory',
				[`• Using : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
					`• Free : ${Math.round(os.freemem())}`])
			.addField('UpTime', moment.duration(this.client.uptime).format('M [months], W [weeks], D [days], H [hrs], m [mins], s [secs]'), true)
			.addField('General Stats', [
				`Guilds: ${this.client.guilds.size}`,
				`Channels: ${this.client.channels.size}`,
				`Users: ${this.client.users.size}`
			])
			.addField('Library', [
				`[Discord.js (v${Discord.version})](https://discord.js.org)`,
				`[Akairo (v${Akairo.version})](https://discord-akairo.github.io)`
			], true)
	    .setTimestamp()
			.setThumbnail(this.client.user.avatarURL)
	    .setFooter(`Version ${version}`, this.client.user.avatarURL);
		return message.util.send(embed);
	}
}

module.exports = BotInfoCommand;
