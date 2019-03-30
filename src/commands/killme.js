const { Command } = require('discord-akairo');

class KillMeCommand extends Command {
    constructor() {
        super('killme', {
           aliases:  ['killme']
        });
    }

    exec(message) {
        return message.channel.send(`${message.author.username} has died.`).then(Message => {
            setTimeout(() => { Message.edit("Respawning..."); }, 1000);
            setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${message.author.username}`); }, 1000);
        });
    }
}

module.exports = KillMeCommand;