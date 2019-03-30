const { Command, version } = require('discord-akairo');
const Discord = require("discord.js");


class BotInfoCommand extends Command {
    constructor() {
        super('BotInfo', {
           aliases: ['bot', 'botstats', 'botinfo']
        });
    }

    exec(message) {
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor(randomColor)
	    .setTitle('Bot Info')
	    .setAuthor(`${message.author.username}#${message.author.discriminator}`)
	    .setDescription('Info On Your Server')
        .addField("Bot Name",  'Moni.js', true)
	    .addField("Created On",  this.client.user.createdAt, true)
        .addField('Serving',  `${this.client.users.size} Users`, true)
        .addField('Channel Count',  this.client.channels.size, true)
        .addField('Bot Dev',  'Moni#3701', true)
        .addField('Guild Size',  this.client.guilds.size, true)
        .addField('UpTime', `${this.client.uptime} ms`, true)
        .addField('Last Restart', this.client.readyAt, true)
        .addField('Discord.js', Discord.version, true)
        .addField('Akairo', version, true)
	    .setTimestamp()
        .setImage(this.client.user.avatarURL)
	    .setFooter("Version 0.0.2");
        return message.util.send(exampleEmbed);
    }
}

module.exports = BotInfoCommand;