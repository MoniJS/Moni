const { Command } = require('discord-akairo');

class GitHubCommand extends Command {
    constructor() {
        super('Github', {
           aliases: ['github', 'git'] 
        });
    }

    exec(message) {
        if(message.guild.id === "550140222822809610") {
          message.channel.send('Here is the JavaScript GitHub Url => (https://github.com/moni-js)');
          message.channel.send('Here is the Python GitHub Url => (https://github.com/moni-py)');
        }
    }
}

module.exports = GitHubCommand;