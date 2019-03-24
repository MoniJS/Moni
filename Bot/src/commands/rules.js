const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class RulesCommand extends Command {
    constructor() {
        super('rules', {
           aliases: ['rules', 'rule']
        });
    }

    exec(message) {
         var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
      const exampleEmbed = new Discord.RichEmbed()
	.setColor(randomColor)
	.setTitle('Rules')
	.setURL('https://monis10.github.io/')
	.setAuthor('Bullet Bot', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emoji-one/64/white-heavy-check-mark_2705.png')
	.setDescription('By using Bullet Bot, you agree to these rules. If you break any rules, we reserve the right to ban you from Bullet Bot')
	.setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/emoji-one/44/warning-sign_26a0.png",  true)
	.addBlankField()
	.addField('Rule #1',"Userbots, spamming, and macros are forbidden",true)
    .addField('Rule #2','Sharing exploits is forbidden', true)
    .addField('Rule #3','Offensive/advertising names on the leaderboard will be wiped and blacklisted', true)
    .addField('Rule #4','Do not use the bot for racism, homophobia, or advertising', true)
	.setTimestamp()
	.setFooter('Dont break the rule or be BANNED', 'https://cdn.discordapp.com/avatars/550460160829816833/8ff23522610d174c4fc418613130d51c.png?size=2048');

message.channel.send(exampleEmbed);
    }
}

module.exports = RulesCommand;