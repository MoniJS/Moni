const { Command } = require('discord-akairo');

function exec(message) {
      let facts = require('../random/catfact.json');
      return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}

module.exports = new Command('catfact', exec, {
    aliases: ['catfacts', 'catfact']
});