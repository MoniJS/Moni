const { Command } = require('discord-akairo');

class ComplementCommand extends Command {
    constructor() {
        super('Complement', {
           aliases: ['complement', 'congrats']
        });
    }

    exec(message) {
        let stuff = require('../random/complement.json');
        let good = stuff[Math.floor(Math.random() * stuff.length)]
        return message.reply(good);
    }
}

module.exports = ComplementCommand;