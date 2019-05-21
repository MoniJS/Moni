const { Command } = require('discord-akairo');
const Akairo = require('discord-akairo');
const Discord = require('discord.js');

class AboutCommand extends Command {
	constructor() {
		super('about', {
			aliases: ['about', 'info'],
			category: 'general',
			clientPermissions: ['EMBED_LINKS'],
			description: { content: 'Shows information about the bot.' }
		});
	}

	exec(message) {
		const prefix = this.handler.prefix(message);
		const owner = this.client.users.get(this.client.ownerID);

		const embed = this.client.util.embed()
			.setColor('RANDOM')
			.setTitle(`About ${this.client.user.username}`)
			.addField('Dev', `**${this.client.user.username}** is developed by **[Moni#3701](https://github.com/MoniS10)**`)
			.addField('Core', `[Discord.js](https://discord.js.org) (${Discord.version}) library and [Akairo](https://1computer1.github.io/discord-akairo) (${Akairo.version.replace(/beta.1/g, 'dev')}) framework`)
			.addField('Database', '[Sequelize](http://docs.sequelizejs.com/) [Node.js](https://nodejs.org/en/) ORM')
			.addField('Host', [
				'[Amazon EC2](https://aws.amazon.com/ec2/)'
			]);
		return message.util.send({ embed });
	}
}

module.exports = AboutCommand;
