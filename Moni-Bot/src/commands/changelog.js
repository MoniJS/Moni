const { Command } = require('discord-akairo');
 const Discord = require("discord.js");
function exec(message) {
      var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
      const exampleEmbed = new Discord.RichEmbed()
	.setColor(randomColor)
	.setTitle('=> Change Log <=')
	.setURL('https://monis10.github.io/')
	.setAuthor('Bullet Bot', 'https://cdn.discordapp.com/avatars/528615077188993054/2e788a5be9302abe46423a84546303cb.png?size=2048')
	.setDescription('Version : 0.0.6', true)
	.setThumbnail(message.guild.iconURL)
	.addBlankField()
	.addField("Date: March.1.2019", true)
    .addField('Removed a few commands', true)
    .addField('All Coin are GOne - sorry', true)
    .addField('Using a FrameWork', true)
	.setImage(message.author.iconURL)
	.setTimestamp();

message.channel.send(exampleEmbed);
}

module.exports = new Command('changelog', exec, {
    aliases: ['changelog', 'changelogs']
});