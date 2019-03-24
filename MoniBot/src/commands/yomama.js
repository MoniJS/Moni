const { Command } = require('discord-akairo');

function exec(message) {
let joke = require('../random/yomama.json');
var randomQ = joke[Math.floor(Math.random() * joke.length)];
message.channel.send(randomQ);
}

module.exports = new Command('Yo Mama', exec, {
    aliases: ['yomama']
});