const discord = require('discord.js');
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class DeleteCommand extends Command {
    constructor() {
        super('Balance', {
            aliases: ['delete'],
            category: 'owner',
            ownerOnly: true,
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Delete all ur coins. :haha:',
                examples: ['@Moni#2030 delete Moni#3701'] // I would never delete my coins lul
            }
        });
    }

    exec(message) {
           const { user } = member;
           if (!user) return message.reply('Tell me who to delete you stupid.')
           var output = await eco.Delete(user.id)
           if (output.deleted == true) return message.reply('Succesfully deleted the user out of the database!')
               message.reply('Error: Could not find the user in database.')
    }
}

module.exports = DeleteCommand;