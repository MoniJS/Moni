const { Command } = require('discord-akairo');

function exec(message) {
    let fortunes = require('../random/fortune.json');
     var Randomfortune = fortunes[Math.floor(Math.random() * fortunes.length)]
 
    message.channel.send(Randomfortune)

}

module.exports = new Command('Fortune', exec, {
    aliases: ['fortune']
});