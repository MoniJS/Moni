const { Command } = require('discord-akairo');

function exec(message) {
    const request = require('request');
        request('https://icanhazdadjoke.com/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("----------");
  console.log(body.joke);
  message.channel.send(body.joke);

  });
}

module.exports = new Command('pun', exec, {
    aliases: ['pun', 'dadjoke', 'dadjokes', 'joke']
});