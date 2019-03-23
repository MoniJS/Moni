const { Command } = require('discord-akairo');

function exec(message) {
     var roast =require('../random/roast.json');
  var randomRoast = roast[Math.floor(Math.random() * roast.length)];

message.reply(randomRoast)

}

module.exports = new Command('/roast', exec, {
    aliases: ['roast']
});