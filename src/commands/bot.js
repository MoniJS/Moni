const { Command, version } = require('discord-akairo');
const Discord = require("discord.js");
const moment = require('moment');
const ms = require('ms');

class BotInfoCommand extends Command {
    constructor() {
        super('BotInfo', {
           aliases: ['bot', 'botstats', 'botinfo', 'bot-info'],
           category: 'util',
           channel: 'guild',
           clientPermissions: ['SEND_MESSAGES'],
           description: {
               content: 'Bot Stats',
               usage: '!bot',
               examples: ['bot']
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
        .addField('Bot Devs',  '[Moni#3701, Suvajit#5580]', true)
        .addField('Guild Size',  this.client.guilds.size, true)
        .addField('UpTime', ms(this.client.uptime), true)
        .addField('Last Restart', moment.utc(this.client.readyAt).format('DD-MM-YYYY kk:mm:ss'), true)
        .addField('Discord.js', Discord.version, true)
        .addField('Akairo', version, true)
	    .setTimestamp()
        .setImage(this.client.user.avatarURL)
	    .setFooter("Version 0.0.3");
        return message.util.send(embed);
    }
}

module.exports = BotInfoCommand;
