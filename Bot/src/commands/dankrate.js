const { Command } = require('discord-akairo');

class DankRateCommand extends Command {
    constructor() {
        super('DankRate', {
           aliases: ['dankrate', 'dank']
        });
    }

    exec(message) {
        var dankrate = Math.floor(Math.random() * 101)
        message.reply('You are ' + dankrate + '% Dank!!')
        message.react('💯')
    }
}

module.exports = DankRateCommand;