const { Command } = require('discord-akairo');
const request = require('request');

class MemeCommand extends Command {
    constructor() {
        super('meme', {
           aliases: ['meme', 'memes']
        });
    }

    exec(message) {
        request('https://api-to.get-a.life/meme', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("----------");
  console.log(body.url);
  console.log(body.text); 
  message.channel.send(body.url)
    });
    }
}

module.exports = MemeCommand;