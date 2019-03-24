const { Command } = require('discord-akairo');

function exec(message) {
     const request = require('request');
        request('https://random.dog/woof.json', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("----------");
  console.log(body.url);
  message.channel.send(body.url)
});
}

module.exports = new Command('dogimg', exec, {
    aliases: ['dogimage', 'dogpic', 'dogpics', 'dogimgs', 'dogimg']
});