const discord = require('discord.js');
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class TransferCommand extends Command {
    constructor() {
        super('Transfer', {
            aliases: ['transfer', 'send'],
            category: 'economy',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Send Coins to Discord Users, Not Bots',
                examples: ['@Moni#2030 transfer Suvjait 100']
            }
        });
    }

    exec(message, { member }) {
       const { user } = member;
       var amount = args[1]

       if (!user) return message.reply('You can send money to **nobody**, please mention someone')
       if (!amount) return message.reply('Umm... You want to send 0 coins, specify how much you want to send.')

       var output = await eco.FetchBalance(message.author.id)
       if (output.balance < amount) return message.reply('You cant send an amount that is bigger that your balance.')

       var transfer = await eco.Transfer(message.author.id, user.id, amount)
message.reply(`:tada: Sucess!!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);

    }
}

module.exports = TransferCommand;
