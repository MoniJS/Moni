const { Command } = require('discord-akairo');

function exec(message) {
    return message.reply(`I choose ${message.guild.members.random().displayName}!`);
}

module.exports = new Command('Random User', exec, {
    aliases: ['randomusr', 'randomuser']
});