const { Command } = require('discord-akairo');

class FortuneCommand extends Command {
    constructor() {
        super('Fortune', {
           aliases: ['fortune'] 
        });
    }

    exec(message) {
         let fortunes = require('../random/fortune.json');
     var Randomfortune = fortunes[Math.floor(Math.random() * fortunes.length)]
 
    message.channel.send(Randomfortune)
    }
}

module.exports = FortuneCommand;