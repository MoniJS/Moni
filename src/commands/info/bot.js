const moment = require('moment'); require('moment-duration-format');
const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const Akairo = require('discord-akairo');
const { version } = require('../../../package.json');
const os = require('os-utils')

class BotInfoCommand extends Command {
    constructor() {
        super('BotInfo', {
            aliases: ['bot', 'botstats', 'botinfo'],
            category: 'util',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
            description: {
                content: 'Displays statistics about the bot',
            }
        });
    }

    exec(message) {
        const devs = ['447916021198749696', '444432489818357760'].map(id => this.client.users.get(id).tag);
        const embed = new Discord.MessageEmbed()
	    .setColor('RANDOM')
	    .setTitle('Bot Info')
	    .setAuthor(`${message.author.tag}`)
	    .setDescription('Info On Your Server')
        .addField("Bot Name",  'Moni.js', true)
	    .addField("Created On",  moment.utc(this.client.user.createdAt).format('DD-MM-YYYY kk:mm:ss'), true)
        .addField('Serving',  `${this.client.users.size} Users`, true)
        .addField('Channel Count',  this.client.channels.size, true)
        .addField('Bot Devs',  devs.join('| '), true)
        .addField('Guild Size',  this.client.guilds.size, true)
        .addField('UpTime', moment.duration(this.client.uptime).format("M [months], W [weeks], D [days], H [hrs], m [mins], s [secs]"), true)
        .addField('Last Restart', moment.utc(this.client.readyAt).format('DD-MM-YYYY kk:mm:ss'), true)
        .addField('Discord.js', Discord.version, true)
        .addField('Akairo', Akairo.version, true)
        .addField('Memory',
            [`• Using : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
            `• Free : ${Math.round(os.freemem())}`
        ], true)
	    .setTimestamp()
        .setImage(this.client.user.avatarURL)
	    .setFooter(`Version ${version}`);
        return message.util.send(embed);
    }
}

module.exports = BotInfoCommand;
