const { Command, version } = require('discord-akairo');
const Discord = require("discord.js");
const moment = require('moment');

class BotInfoCommand extends Command {
    constructor() {
        super('BotInfo', {
           aliases: ['bot', 'botstats', 'botinfo']
        });
    }

    exec(message) {
        const embed = new Discord.MessageEmbed()
	    .setColor('RANDOM')
	    .setTitle('Bot Info')
	    .setAuthor(`${message.author.tag}`)
	    .setDescription('Info On Your Server')
        .addField("Bot Name",  'Moni.js', true)
	    .addField("Created On",  moment.utc(this.client.user.createdAt).format('DD-MM-YYYY kk:mm:ss'), true)
        .addField('Serving',  `${this.client.users.size} Users`, true)
        .addField('Channel Count',  this.client.channels.size, true)
        .addField('Bot Dev',  'Moni#3701', true)
        .addField('Guild Size',  this.client.guilds.size, true)
        .addField('UpTime', `${this.client.uptime} ms`, true)
        .addField('Last Restart', moment.utc(this.client.readyAt).format('DD-MM-YYYY kk:mm:ss'), true)
        .addField('Discord.js', Discord.version, true)
        .addField('Akairo', version, true)
	    .setTimestamp()
        .setImage(this.client.user.avatarURL)
	    .setFooter("Version 0.0.2");
        return message.util.send(embed);
    }
}

module.exports = BotInfoCommand;