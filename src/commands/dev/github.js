const { Command } = require('discord-akairo');

class GitHubCommand extends Command {
    constructor() {
        super('Github', {
            aliases: ['github', 'git'],
            category: 'dev',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'GitHub Links',
                examples: ['']
            }
        });
    }

    exec(message) {
        if(message.guild.id === "550140222822809610") {
            return message.util.send([
                `Here is the JavaScript GitHub Url => (<https://github.com/moni-js>)`,
            ]);
        }
    }
}

module.exports = GitHubCommand;
