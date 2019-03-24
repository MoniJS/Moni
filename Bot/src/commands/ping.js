const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('Ping', {
           aliases: ['ping']
        });
    }

    exec(message) {
        message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");  
    }
}

module.exports = PingCommand;