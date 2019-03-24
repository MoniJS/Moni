const { Command } = require('discord-akairo');

function exec(message) {
    var dankrate = Math.floor(Math.random() * 101)
        message.reply('You are ' + dankrate + '% Dank!!')
        message.react('💯')
}

module.exports = new Command('dankrate', exec, {
    aliases: ['dankrate', 'dank'], cooldown: 120000,
});