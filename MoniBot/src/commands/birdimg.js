const { Command } = require('discord-akairo');

function exec(message) {
    const request = require('request');
        request('http://random.birb.pw/tweet.json/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("----------");
  console.log(body.file);
  message.channel.send(`https://random.birb.pw/img/${body.file}`)

  });

}

module.exports = new Command('birdimg', exec, {
    aliases: ['bird', 'birdimg']
});