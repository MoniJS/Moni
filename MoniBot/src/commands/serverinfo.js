const { Command } = require('discord-akairo');
 const Discord = require("discord.js");

function exec(message) {
   var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    const exampleEmbed = new Discord.RichEmbed()
	.setColor(randomColor)
	.setTitle('Server Info')
	.setAuthor(`${message.author.username}#${message.author.discriminator}`)
	.setDescription('Info On Your Server')
    .addField("Guild ID",  message.guild.id, true)
	.addField("Guild created at",  message.guild.createdAt, true)
    .addField('Total Member Count',  message.guild.memberCount, true)
    .addField('Channel Size',  message.guild.channels.size, true)
    .addField('Server Owner',  message.guild.owner, true)
    .addField('Server Region',  message.guild.region, true)
    .addField('You Joined At', message.member.joinedAt, true)
	.setTimestamp()
    .setImage(message.guild.iconURL)
	.setFooter(new Date().getTime() - message.createdTimestamp + " ms");

message.channel.send(exampleEmbed);

}

module.exports = new Command('Server Info', exec, {
    aliases: ['server', 'serverinfo', 'serverstats', 'serverstat']
});