const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help'] 
        });
    }

    exec(message, commands) {
        const prefix = this.handler.prefix(message);
		console.log(prefix);
		}

		
}

module.exports = HelpCommand;