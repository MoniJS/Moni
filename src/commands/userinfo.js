const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const moment = require('moment');
const activities = {
	PLAYING: 'Playing',
	STREAMING: 'Streaming',
	WATCHING: 'Watching',
	LISTENING: 'Listening to'
};

class UserInfoCommand extends Command {
    constructor() {
        super('UserInfo', {
           aliases: ['user', 'userinfo', 'userstats', 'userstat', 'member', 'member-info']
        });
    }

    exec(message) {
         const activities = {
	PLAYING: 'Playing',
	STREAMING: 'Streaming',
	WATCHING: 'Watching',
	LISTENING: 'Listening to'
};
        const args = message.content.slice(['.', '!']).split(/ +/);
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
let slappedUser = message.mentions.users.first();

if(message.mentions.users.size < 1) return message.reply("You forgot to name a idiot to look up");
 const creation = new Date(slappedUser.createdAt);
    const join = new Date(slappedUser.joinedAt);

  
    const exampleEmbed = new Discord.RichEmbed()
	.setColor(randomColor)
	.setTitle(`${slappedUser.username}#${slappedUser.discriminator} - ${slappedUser.id}`)
     .setDescription(slappedUser.presence.activity
						? `${activities[slappedUser.presence.activity.type]} **${slappedUser.presence.activity.name}**`
						: '')
	.setThumbnail(slappedUser.avatarURL)
.addField('❯ Nickname', slappedUser.nickname || 'None', true)
.addField('❯ Bot?', slappedUser.bot ? 'Yes' : 'No', true)
.addField('❯ Discord Join Date', moment.utc(slappedUser.createdAt).format('MM/DD/YYYY h:mm A'), true)
.addField('❯ Server Join Date', moment.utc(slappedUser.joinedAt).format('MM/DD/YYYY h:mm A'), true)
.addField('❯ Avatar Url', `[Click Here](${slappedUser.avatarURL})`, true)
	.setTimestamp()
	.setFooter(`❯ Discord ID: ${slappedUser.id}`);

message.channel.send(exampleEmbed);
    }
}

module.exports = UserInfoCommand;
