const { Command } = require('discord-akairo');
const Discord = require("discord.js");

function exec(message) {

message.channel.send("Fork Me On GitHub and make me better (https://github.com/moni-js/Moni)");
message.channel.send("You aslo get a Special Role Here https://discord.gg/jQdFFH6");

}

module.exports = new Command('Help', exec, {
    aliases: ['src', 'source', 'support', 'commands', 'cmd']
});