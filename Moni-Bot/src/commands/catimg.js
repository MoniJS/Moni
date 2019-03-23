const { Command } = require('discord-akairo');

function exec(message) {
      const request = require('request');
        request('http://aws.random.cat/meow', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("----------");
  console.log(body.file);
  message.channel.send(body.file)
    });
}

module.exports = new Command('catimg', exec, {
    aliases: ['catimage', 'catimg', 'catpic', 'catimages']
});