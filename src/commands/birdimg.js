const { Command } = require('discord-akairo');
const request = require('request');

class BirdImgCommand extends Command {
    constructor() {
        super('BirdImg', {
           aliases: ['bird', 'birdimg'] 
        });
    }

    exec(message) {
    request('http://random.birb.pw/tweet.json/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log("----------");
    console.log(body.file);
    message.channel.send(`https://random.birb.pw/img/${body.file}`)

  });
    }
}

module.exports = BirdImgCommand;