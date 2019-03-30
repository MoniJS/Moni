const { Command } = require('discord-akairo');

class JavaScriptCommand extends Command {
    constructor() {
        super('JavaScript', {
           aliases: ['Javascript', 'js','ecmascript'] 
        });
    }

    exec(message) {
        if(message.guild.id === '550140222822809610') {
            return message.channel.send(`***Learn JS***

- MDN JS : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- CodeAcademy : https://www.codecademy.com/learn/introduction-to-javascript
- Eloquent JavaScript : http://eloquentjavascript.net/
- JavaScript For Cats : http://jsforcats.com/
- YDKJ : https://github.com/getify/You-Dont-Know-JS
- JS-Books : https://jsbooks.revolunet.com/
`);
        }
    }
}

module.exports = JavaScriptCommand;