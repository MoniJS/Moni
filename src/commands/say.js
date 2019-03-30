const { Command } = require('discord-akairo');

class SayCommand extends Command {
    constructor() {
        super('say', {
           aliases: ['say', 'echo'],
           args: [
               {
                   id: 'msg',
                   match: 'content',
                   default: 'hey say something, before I give up on you'
               }
           ]
        });
    }

    exec(message, { msg }) {
        return message.channel.send(msg);
    }
}

module.exports = SayCommand;