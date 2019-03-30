const { Command } = require('discord-akairo');

class SrcCommand extends Command {
    constructor() {
        super('src', {
           aliases: ['src', 'source', 'support', 'commands', 'cmd']
        });
    }

    exec(message) { 
        message.channel.send("Fork Me On GitHub and make me better (https://github.com/moni-js/Moni)");
message.channel.send("You also get a Special Role Here https://discord.gg/jQdFFH6");

    }
}

module.exports = SrcCommand;