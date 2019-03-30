const { Command } = require('discord-akairo');

class CatFactCommand extends Command {
    constructor() {
        super('CatFact', {
           aliases: ['catfacts', 'catfact']
        });
    }

    exec(message) {
        let facts = require('../random/catfact.json');
        return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);
    }
}

module.exports = CatFactCommand;