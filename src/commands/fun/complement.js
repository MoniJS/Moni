const { Command } = require('discord-akairo');

class ComplementCommand extends Command {
    constructor() {
        super('Complement', {
            aliases: ['complement', 'congrats'],
            category: 'fun',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Complement Your Self',
                examples: ['']
            }
        });
    }

    exec(message) {
        let stuff = require('../../random/complement.json');
        let good = stuff[Math.floor(Math.random() * stuff.length)]
        return message.util.reply(good);
    }
}

module.exports = ComplementCommand;
