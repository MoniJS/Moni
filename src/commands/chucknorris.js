
const { Command } = require('discord-akairo');
const request = require('request');

class ChuckNCommand extends Command {
    constructor() {
        super('chuckN', {
           aliases: ['chuckn', 'chuck', 'chucknoris', 'chucknorris']
        });
    }

    exec(message) {
        request('https://api.chucknorris.io/jokes/random', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            return message.channel.send(body.value)
        });
    }
}

module.exports = ChuckNCommand;