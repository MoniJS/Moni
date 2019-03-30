const { Command } = require('discord-akairo');
const request = require('request');

class PunCommand extends Command {
    constructor() {
        super('Pun', {
           aliases: ['pun', 'dadjoke', 'dadjokes', 'joke']
        });
    }

    exec(message) {
      request('https://icanhazdadjoke.com/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("----------");
  console.log(body.joke);
  message.channel.send(body.joke);

  });
    }
}

module.exports = PunCommand;