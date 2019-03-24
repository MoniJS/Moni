const { Command } = require('discord-akairo');

function exec(message) {
    const request = require('request');
    request('https://api.chucknorris.io/jokes/random', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    message.channel.send(body.value)
    });

}

module.exports = new Command('chuckn', exec, {
    aliases: ['chuckn', 'chuck', 'chucknoris', 'chucknorris']
});