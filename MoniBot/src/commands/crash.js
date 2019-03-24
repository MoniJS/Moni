const { Command } = require('discord-akairo');

function exec(message) {
    message.channel.send(`Wow. That's awful of you, ${message.author.username}. I'm just here trying to be helpful and make friends but you want to shut me down. Quite rude!`);

}

module.exports = new Command('crash', exec, {
    aliases: ['crash']
});