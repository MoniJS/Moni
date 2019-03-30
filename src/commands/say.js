const { Command } = require('discord-akairo');

class SayCommand extends Command {
    constructor() {
        super('say', {
           aliases: ['say', 'echo']
        });
    }

    exec(message) {
        const args = message.content.slice(['.', '!']).split(/ +/);
     var text = message.content.split(" ").slice(1).join(" ")
    if(!text) return message.reply ('hey say something, before I give up on you')
    message.channel.send(text);

    }
}

module.exports = SayCommand;