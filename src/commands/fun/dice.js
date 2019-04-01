const { Command } = require('discord-akairo');

class DiceCommand extends Command {
    constructor() {
        super('Dice', {
           aliases: ['dice', 'roll'],
           category: 'util',
           channel: 'guild',
           clientPermissions: ['SEND_MESSAGES'],
           description: {
               content: 'Roll A 6 Sided Dice',
               usage: '!dice',
               examples: ['dice']
               }
        });
    }

    exec(message) {

        let Roll = require('../../random/dice.json');
        let randomRoll = Roll[Math.floor(Math.random() * Roll.length)];
        return message.channel.send('#' + randomRoll);
    }
}

module.exports = DiceCommand;
