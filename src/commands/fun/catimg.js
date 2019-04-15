const { Command } = require('discord-akairo');
const request = require('request');

class CatImgCommand extends Command {
	constructor() {
		super('CatImg', {
			aliases: ['catimage', 'catimg', 'catpic', 'catimages'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'Cat Purr-fect Pics',
				examples: ['']
			}
		});
	}

	exec(message) {
		request('http://aws.random.cat/meow', { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			console.log('----------');
			console.log(body.file);
			return message.util.send(body.file);
		});
	}
}

module.exports = CatImgCommand;
