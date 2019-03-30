const { Command } = require('discord-akairo');

class DankRateCommand extends Command {
    constructor() {
        super('DankRate', {
           aliases: ['dankrate', 'dank']
        });
    }

    async exec(message) {
        let dankrate = Math.floor(Math.random() * 101)
        const m = await message.reply('You are ' + dankrate + '% Dank!!')
        m.react('💯');
    }
}

module.exports = DankRateCommand;