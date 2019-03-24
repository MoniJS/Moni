const { Command } = require('discord-akairo');

function exec(message) {
      let facts = require('../random/dogfact.json');
    return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}

module.exports = new Command('dogfact', exec, {
    aliases: ['dogfacts', 'dogfact']
});