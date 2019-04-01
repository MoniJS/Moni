const { Command } = require('discord-akairo');

class CoinFlipCommand extends Command {
    constructor() {
        super('CoinFlip', {
           aliases: ['coin', 'flipacoin', 'flipcoin', 'toss', 'cointoss', 'flip'],
           category: 'util',
           channel: 'guild',
           clientPermissions: ['SEND_MESSAGES'],
           description: {
               content: '2 sided coin flip',
               usage: '!flip',
               examples: ['coin', 'flipacoin', 'flipcoin', 'toss', 'cointoss', 'flip']
          }
        });
    }

    exec(message) {
        let coin = require('../../random/coinflip.json');
        let randomCoin = coin[Math.floor(Math.random() * coin.length)];
        return message.reply(randomCoin);
    }
}

module.exports = CoinFlipCommand;
