const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const moment = require('moment');
const filterLevels = ['Off', 'No Role', 'Everyone'];
const verificationLevels = ['None', 'Low', 'Medium', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'];

class ServerCommand extends Command {
    constructor() {
        super('server', {
           aliases: ['server', 'serverinfo', 'serverstats', 'serverstat']
        });
    }

    exec(message) {
        const randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor(randomColor)
	    .setTitle('Server Info')
        .setThumbnail(message.guild.iconURL())
	    .setAuthor(`${message.author.tag}`)
	    .setDescription('Info On Your Server')
        .addField('❯ Name', message.guild.name, true)
        .addField("❯ Guild ID",  message.guild.id, true)
	    .addField("❯ Guild Creation",  moment.utc(message.guild.createdAt).format('MM/DD/YYYY h:mm A'), true)
        .addField('❯ Members',  message.guild.memberCount, true)
        .addField('❯ Explicit Filter', filterLevels[message.guild.explicitContentFilter], true)
        .addField('❯ Verification Level', verificationLevels[message.guild.verificationLevel], true)
        .addField('❯ Channels',  message.guild.channels.filter(channel => channel.type !== 'category').size, true)
        .addField('❯ Server Owner',  message.guild.owner, true)
        .addField('❯ Server Region',  message.guild.region.toUpperCase(), true)
        .addField('❯ Join Date', moment.utc(message.member.joinedAt).format('MM/DD/YYYY h:mm A'), true)
	    .setTimestamp()
        .setImage(message.guild.iconURL())
	    .setFooter(new Date().getTime() - message.createdTimestamp + " ms");

        return message.channel.send(exampleEmbed);
    }
}

module.exports = ServerCommand;
