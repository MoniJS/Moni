const { Command } = require('discord-akairo');

class GitHubCommand extends Command {
    constructor() {
        super('Github', {
            aliases: ['github', 'git'],
            category: 'util',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'GitHub Links',
                usage: '!git',
                examples: ['github', 'git']
            }
        });
    }

    exec(message) {
        if(message.guild.id === "550140222822809610") {
            return message.channel.send([
                `Here is the JavaScript GitHub Url => (https://github.com/moni-js)`,
                `Here is the Python GitHub Url => (https://github.com/moni-py)`
            ]);
        }
    }
}

module.exports = GitHubCommand;
