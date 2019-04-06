const { Command } = require('discord-akairo');

class DankRateCommand extends Command {
    constructor() {
        super('DankRate', {
            aliases: ['dankrate', 'dank'],
            category: 'fun',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'See Ur DankRate',
                usage: '!dank',
                examples: ['dank']
            }
        });
    }

    async exec(message) {
        let dankrate = Math.floor(Math.random() * 101)
        const m = await message.util.reply('You are ' + dankrate + '% Dank!!')
        m.react('💯');
    }
}

module.exports = DankRateCommand;
