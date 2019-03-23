const { Command } = require('discord-akairo');

function exec(message) {
    let stuff = require('../random/complement.json');
    var good = stuff[Math.floor(Math.random() * stuff.length)]
message.reply(good);

}

module.exports = new Command('complement', exec, {
    aliases: ['complement', 'congrats']
});