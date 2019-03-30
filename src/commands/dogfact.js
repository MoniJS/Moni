const { Command } = require('discord-akairo');

class DogFactCommand extends Command {
    constructor() {
        super('DogFact', {
           aliases: ['dogfacts', 'dogfact']
        });
    }

    exec(message) {
           let facts = require('../random/dogfact.json');
    return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);
    }
}

module.exports = DogFactCommand;