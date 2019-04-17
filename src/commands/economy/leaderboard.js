/* eslint-disable new-cap */
/* eslint-disable max-len */
const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class LeaderboardCommand extends Command {
	constructor() {
		super('leaderboard', {
			aliases: ['leaderboard', 'richest'],
			category: 'economy',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'See the richest of the richest',
				examples: ['@Moni#2030']
			},
			args: [
				{
					id: 'member',
					type: 'member',
					default: message => message.member
				}
			]
		});
	}

	async exec(message, { member }) {
		if (member) {
			const output = await eco.Leaderboard({ search: member.user.id });
			if (output) return message.channel.send(`The user ${member.user.tag} is number ${output} the richest list!`);
		}

		await eco.Leaderboard({
			limit: 3
		}).then(async users => {
			// make sure it is async
			const firstplace = await this.client.users.fetch(users[0].userid);
			const secondplace = await this.client.users.fetch(users[1].userid);
			const thirdplace = await this.client.users.fetch(users[2].userid);

			return message.channel.send([
				'Leaderboard',
				`1 - ${firstplace.tag} : ${users[0].balance}`,
				`2 - ${secondplace.tag} : ${users[1].balance}`,
				`3 - ${thirdplace.tag} : ${users[2].balance}`
			]);
		});
	}
}

module.exports = LeaderboardCommand;
