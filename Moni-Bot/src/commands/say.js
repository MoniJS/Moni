const { Command } = require('discord-akairo');

function exec(message) {
    const args = message.content.slice(['.', '!']).split(/ +/);
     var text = message.content.split(" ").slice(1).join(" ")
    if(!text) return message.reply ('hey say something, before I give up on you')
    message.channel.send(text);

}

module.exports = new Command('Say', exec, {
    aliases: ['say', 'echo',]
});