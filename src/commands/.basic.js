const { Command } = require('discord-akairo');

class BasicCommand extends Command {
    constructor() {
        super('basic', {
           aliases: ['basic'] 
        });
    }

    exec(message) {}
}

module.exports = BasicCommand;