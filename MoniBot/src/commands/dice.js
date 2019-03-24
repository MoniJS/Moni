const { Command } = require('discord-akairo');

function exec(message) {
    let Roll = require('../random/dice.json');
      var randomRoll = Roll[Math.floor(Math.random() * Roll.length)];
      message.channel.send('#' + randomRoll);
}

module.exports = new Command('dice', exec, {
    aliases: ['dice', 'roll']
});