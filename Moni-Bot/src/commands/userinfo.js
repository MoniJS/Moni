const { Command } = require('discord-akairo');
const Discord = require("discord.js");

function exec(message) {
    const args = message.content.slice(['.', '!']).split(/ +/);
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
let slappedUser = message.mentions.users.first();

if(message.mentions.users.size < 1) return message.reply("You forgot to name a idiot to look up");
 const creation = new Date(slappedUser.createdAt);
    const join = new Date(slappedUser.joinedAt);
    
   let member = slappedUser.id
    const exampleEmbed = new Discord.RichEmbed()
	.setColor(randomColor)
	.setTitle(`${slappedUser.username}#${slappedUser.discriminator} - ${slappedUser.id}`)
	.setDescription(slappedUser)
	.setThumbnail(slappedUser.avatarURL)
.addField('Nickname', member.nick ? member.nick : 'No Nickname here', true)
    .addField('Account Created At', slappedUser.createdAt, true)
 .addField('Guild Joined At', message.member.joinedAt, true)
  .addField('Avatar Url', `[Click Here](${slappedUser.avatarURL})`, true)
	.setTimestamp()
	.setFooter(` Discord ID: ${slappedUser.id}`);

message.channel.send(exampleEmbed);

}

module.exports = new Command('User Info', exec, {
    aliases: ['user', 'userinfo', 'userstats', 'userstat']
});