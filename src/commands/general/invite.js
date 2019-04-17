const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const { version } = require('../../../package.json');


class InviteCommand extends Command {
	constructor() {
		super('invite', {
			aliases: ['invite'],
			category: 'general',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
			description: {
				content: 'Displays the invite link for the bot'
			}
		});
	}

	exec(message) {
		const prefix = this.handler.prefix(message);
		const owner = this.client.users.get(this.client.ownerID);

		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.addField('Invite', '[Invite me to your server by clicking here](https://discordapp.com/oauth2/authorize?client_id=550460160829816833&scope=bot&permissions=8\n)')
			.setFooter(`${this.client.user.username} ${version}`, this.client.user.avatarURL);
		return message.util.send({ embed });
	}
}

module.exports = InviteCommand;
