const { Command } = require('discord-akairo');

function exec(message) {
      message.channel.send(`${message.author.username} has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${message.author.username}`); }, 1000);
    });

}

module.exports = new Command('Kill Me', exec, {
    aliases: ['killme']
});