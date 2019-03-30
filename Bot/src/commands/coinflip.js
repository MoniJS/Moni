const { Command } = require('discord-akairo');

class CoinFlipCommand extends Command {
    constructor() {
        super('CoinFlip', {
           aliases: ['coin', 'flipacoin', 'flipcoin', 'toss', 'cointoss', 'flip']
        });
    }

    exec(message) {
         let coin = require('../random/coinflip.json');
      var randomCoin = coin[Math.floor(Math.random() * coin.length)];
    message.reply(randomCoin);
   
    }
}

module.exports = CoinFlipCommand;