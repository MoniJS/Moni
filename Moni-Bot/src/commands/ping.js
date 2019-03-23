const { Command } = require('discord-akairo');

function exec(message) {
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
            
}   

module.exports = new Command('ping', exec, {
    aliases: ['ping']
});