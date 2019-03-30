const { Command } = require('discord-akairo');

class RoastCommand extends Command {
    constructor() {
        super('roast', {
           aliases: ['roast']
        });
    }

    exec(message) {
            var roast =require('../random/roast.json');
  var randomRoast = roast[Math.floor(Math.random() * roast.length)];

message.reply(randomRoast)
    }
}

module.exports = RoastCommand;