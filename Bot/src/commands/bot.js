const { Command } = require('discord-akairo');
const Discord = require("discord.js");


class BotInfoCommand extends Command {
    constructor() {
        super('BotInfo', {
           aliases: ['bot', 'botstats', 'botinfo']
        });
    }

    exec(message) {
         var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    const exampleEmbed = new Discord.RichEmbed()
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
	.setTimestamp()
    .setImage(this.client.user.avatarURL)
	.setFooter("Version 0.0.2");

message.channel.send(exampleEmbed);
    }
}

module.exports = BotInfoCommand;