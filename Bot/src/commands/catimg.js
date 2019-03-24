const { Command } = require('discord-akairo');
const request = require('request');

class CatImgCommand extends Command {
    constructor() {
        super('CatImg', {
           aliases: ['catimage', 'catimg', 'catpic', 'catimages']
        });
    }

    exec(message) {
    request('http://aws.random.cat/meow', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("----------");
  console.log(body.file);
  message.channel.send(body.file)
    });
    }
}

module.exports = CatImgCommand;