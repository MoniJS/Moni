const { Command } = require('discord-akairo');

class ComplementCommand extends Command {
    constructor() {
        super('Complement', {
           aliases: ['complement', 'congrats']
        });
    }

    exec(message) {
        let stuff = require('../random/complement.json');
    var good = stuff[Math.floor(Math.random() * stuff.length)]
message.reply(good);
    }
}

module.exports = ComplementCommand;