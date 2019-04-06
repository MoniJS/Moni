const { Command } = require('discord-akairo');
const request = require('request');

class MemeCommand extends Command {
    constructor() {
        super('meme', {
            aliases: ['meme', 'memes'],
            category: 'util',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'The Most Random Memes',
                usage: '!meme',
                examples: ['memes', 'meme']
            }
        });
    }

    exec(message) {
        request('https://api-to.get-a.life/meme', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log("----------");
            console.log(body.url);
            console.log(body.text);
            return message.channel.send(body.url)
        });
    }
}

module.exports = MemeCommand;
