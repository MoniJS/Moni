const { Command } = require('discord-akairo');

function exec(message) {
    const args = message.content.slice(['.', '!']).split(/ +/);

}

module.exports = new Command('/basic', exec, {
    aliases: ['/basic']
});