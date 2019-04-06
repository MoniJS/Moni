const { Command } = require('discord-akairo');
const request = require('request');

class PunCommand extends Command {
    constructor() {
        super('Pun', {
            aliases: ['pun', 'dadjoke', 'dadjokes', 'joke'],
            category: 'fun',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'A random Pun',
                usage: '!pun',
                examples: ['pun', 'dadjokes']
            }
        });
    }

    exec(message) {
        request('https://icanhazdadjoke.com/', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log("----------");
            console.log(body.joke);
            return message.util.send(body.joke);
        });
    }
}

module.exports = PunCommand;
