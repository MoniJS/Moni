const { Command } = require('discord-akairo');

class FortuneCommand extends Command {
    constructor() {
        super('Fortune', {
           aliases: ['fortune'] 
        });
    }

    exec(message) {
        let fortunes = require('../random/fortune.json');
        let Randomfortune = fortunes[Math.floor(Math.random() * fortunes.length)]
        return message.channel.send(Randomfortune)
    }
}

module.exports = FortuneCommand;