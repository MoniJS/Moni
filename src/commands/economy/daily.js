const discord = require('discord.js');
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class DailyCommand extends Command {
    constructor() {
        super('Daily', {
            aliases: ['daily'],
            category: 'economy',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Get your daily bonus',
                examples: ['@Moni#2030 daily']
            }
        });
    }

    exec(message) {
         var output = await eco.Daily(message.author.id)

      if (output.updated) {

        var profile = await eco.AddToBalance(message.author.id, 100)
        message.reply(`Nice job checking in today for you coins. You now have ${profile.newbalance} coins.`);

      } else {
        message.channel.send(`Hey! You. :rage: Trying to cheat the system. Nope.\nYour next daily will be in ${output.timetowait}`)
      }
    }
}

module.exports = DailyCommand;
