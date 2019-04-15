const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const moment = require('moment');
const filterLevels = ['Off', 'No Role', 'Everyone'];
const verificationLevels = ['None', 'Low', 'Medium', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'];

class ServerCommand extends Command {
	constructor() {
		super('server', {
			aliases: ['server', 'serverinfo', 'serverstats', 'serverstat'],
			category: 'info',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Get Server Info',
				examples: ['']
			}
		});
	}

	exec(message) {
		const embed = new Discord.MessageEmbed()
	    .setColor('RANDOM')
	    .setTitle('Server Info')
			.setThumbnail(message.guild.iconURL())
	    .setAuthor(`${message.author.tag}`)
	    .setDescription('Info On Your Server')
			.addField('❯ Name', message.guild.name, true)
			.addField('❯ Guild ID', message.guild.id, true)
	    .addField('❯ Guild Creation', moment.utc(message.guild.createdAt).format('MM/DD/YYYY h:mm A'), true)
			.addField('❯ Members', message.guild.memberCount, true)
			.addField('❯ Explicit Filter', filterLevels[message.guild.explicitContentFilter], true)
			.addField('❯ Verification Level', verificationLevels[message.guild.verificationLevel], true)
			.addField('❯ Channels', message.guild.channels.filter(channel => channel.type !== 'category').size, true)
			.addField('❯ Server Owner', message.guild.owner, true)
			.addField('❯ Server Region', message.guild.region.toUpperCase(), true)
			.addField('❯ Join Date', moment.utc(message.member.joinedAt).format('MM/DD/YYYY h:mm A'), true)
	    .setTimestamp()
	    .setFooter(`${new Date().getTime() - message.createdTimestamp} ms`);

		return message.util.send({ embed });
	}
}

module.exports = ServerCommand;
