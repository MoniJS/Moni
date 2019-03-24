const { Command } = require('discord-akairo');

class YomamaCommand extends Command {
    constructor() {
        super('yomama', {
           aliases: ['yomama']
}); 
        
    }

    exec(message) {
    let joke = require('../random/yomama.json');
var randomQ = joke[Math.floor(Math.random() * joke.length)];
message.channel.send(randomQ);
    }
}

module.exports = YomamaCommand;