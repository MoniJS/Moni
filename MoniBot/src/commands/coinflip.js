const { Command } = require('discord-akairo');

function exec(message) {
    let coin = require('../random/coinflip.json');
      var randomCoin = coin[Math.floor(Math.random() * coin.length)];
    message.reply(randomCoin);

}

module.exports = new Command('CoinFlip', exec, {
    aliases: ['coin', 'flipacoin', 'flipcoin', 'toss', 'cointoss', 'flip']
});