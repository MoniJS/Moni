const discord = require('discord.js');
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class LeaderboardCommand extends Command {
    constructor() {
        super('Leaderboard', {
            aliases: ['leaderboard', 'richest'],
            category: 'economy',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'See the richest of the richest',
                examples: ['@Moni#2030 leaderboard']
            }
        });
    }
async exec(message) {
         if (message.mentions.users.first()) {

        var output = await eco.Leaderboard({
          search: message.mentions.users.first().id
        })
        message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} the richest list!`);

    //Searches for the top 3 and outputs it to the user.
  } else {

    eco.Leaderboard({
      limit: 3
    }).then(async users => { //make sure it is async

      var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
      var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
      var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place

      message.channel.send(`My leaderboard:

1 - ${firstplace.tag} : ${users[0].balance}
2 - ${secondplace.tag} : ${users[1].balance}
3 - ${thirdplace.tag} : ${users[2].balance}`)

    })

          }
    }
}


module.exports = LeaderboardCommand;
