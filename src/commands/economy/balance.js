const discord = require('discord.js');
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class BalanceCommand extends Command {
    constructor() {
        super('Balance', {
            aliases: ['balance'],
            category: 'economy',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'See how much money you have saved up :)',
                examples: ['@Moni#2030 balance']
            }
        });
    }

    async exec(message) {
         var output = await eco.FetchBalance(message.author.id)
        message.channel.send(`Yo ${message.author.tag}! My senses say you own ${output.balance} coins.`);
    }
}

module.exports = BalanceCommand;
