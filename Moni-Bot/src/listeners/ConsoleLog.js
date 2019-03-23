const { Listener } = require('discord-akairo');

class CommandStartedListener extends Listener {
    constructor() {
        super('commandstarted', {
            emitter: 'commandHandler',
            eventName: 'commandStarted'
        });
    }

    exec(message, command, args) {
    console.log('Command Name: ' + command.aliases);
    console.log('User Id: ' + message.author.id); 
    console.log(`User: ${message.author.username}#${message.author.discriminator} - ${message.author.id}`)
    console.log('Time: ' + message.createdAt);
    console.log('Guild Id: ' + message.guild.id);
    console.log('Guild Member Count: ' + message.guild.memberCount);
    console.log('Guild Name: ' + message.guild.name);
    console.log('Guild URl ' + message.guild.iconURL);
    console.log(message.content);
    console.log(new Date().getTime() - message.createdTimestamp + " ms")
    console.log('----------');
    }
}

module.exports = CommandStartedListener;