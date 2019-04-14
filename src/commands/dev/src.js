const { Command } = require('discord-akairo');

class SrcCommand extends Command {
    constructor() {
        super('src', {
            aliases: ['src', 'source', 'support'],
            category: 'dev',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Get The Source Code For This Bot',
                examples: ['']
            }
        });
    }

    exec(message) {
        return message.util.send([
            `Fork Me On GitHub and make me better (https://github.com/moni-js/Moni)`,
            `You also get a Special Role Here https://discord.gg/jQdFFH6`
        ]);
    }
}

module.exports = SrcCommand;
