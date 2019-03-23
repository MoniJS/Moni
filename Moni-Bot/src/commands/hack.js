const { Command } = require('discord-akairo');

function exec(message) {
   let slappedUser = message.mentions.users.first();
        if(message.mentions.users.size < 1) return message.reply("You forgot to mention someone to hack.");

        message.channel.send(`Initializing the hack on ${slappedUser} `).then(Message => {
        setTimeout(() => { Message.edit("Downloading Hacks..."); }, 2000);
        setTimeout(() => { Message.edit(`Finding Facebook Login...`); }, 4000);
        setTimeout(() => { Message.edit(`Found Facebook Login & Password`); }, 7000);
         setTimeout(() => { Message.edit(`Injecting hack.exe`); }, 9000);
         setTimeout(() => { Message.edit(`Downloading User Data...`); }, 12000);
          setTimeout(() => { Message.edit(`Selling data on Dark Web`); }, 15000);
          setTimeout(() => { Message.edit(`Stealing 134.432545 Bitcoins `); }, 18000);
          setTimeout(() => { Message.edit(`Sending BitCoins to Ip Address : 12.3.456.789.0`); }, 23000);
           setTimeout(() => { Message.edit(`Hiring Bomb Squad`); }, 27000);
            setTimeout(() => { Message.edit(` ${message.author} Murdered ${slappedUser}`); }, 32000);
    });

}

module.exports = new Command('Hack', exec, {
    aliases: ['hack']
});