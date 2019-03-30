const { Command } = require('discord-akairo');

class RoastCommand extends Command {
    constructor() {
        super('roast', {
           aliases: ['roast']
        });
    }

    exec(message) {
        const roast =require('../random/roast.json');
        let randomRoast = roast[Math.floor(Math.random() * roast.length)];
        return message.reply(randomRoast)
    }
}

module.exports = RoastCommand;