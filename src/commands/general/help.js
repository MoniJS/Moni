const { Command } = require("discord-akairo");

class HelpCommand extends Command {
	constructor() {
		super("help", {
			aliases: ["help"],
			category: "general",
			clientPermissions: ["EMBED_LINKS"],
			quoted: false,
			args: [
				{
					id: "command",
					type: "commandAlias",
					prompt: {
						start: "Which command do you need help with?",
						retry: "Please provide a valid command.",
						optional: true
					}
				}
			],
			description: {
				content: "Displays a list of commands or information about a command.",
				usage: "[command]",
				examples: ["", "stats", "js"]
			}
		});
	}

	exec(message, { command }) {
		if (!command) return this.execCommandList(message);

		const prefix = this.handler.prefix(message);
		const description = Object.assign({
			content: "No description available.",
			usage: "",
			examples: [],
			fields: []
		}, command.description);

		const embed = this.client.util.embed()
			.setColor("#8387db")
			.setTitle(`\`${prefix[0]}${command.aliases[0]} ${description.usage}\``)
			.addField("Description", description.content);

		for (const field of description.fields) embed.addField(field.name, field.value);

		if (description.examples.length) {
			const text = `${prefix[0]}${command.aliases[0]}`;
			embed.addField("Examples", `\`${text} ${description.examples.join(`\`\n\`${text} `)}\``, true);
		}

		if (command.aliases.length > 1) {
			embed.addField("Aliases", `\`${command.aliases.join("` `")}\``, true);
		}

		return message.util.send({ embed });
	}

	async execCommandList(message) {
		const embed = this.client.util.embed()
			.setColor("#8387db")
			.addField("Command List", [
				"To view details for a command, do `*help <command>`"
			]);

		for (const category of this.handler.categories.values()) {
			embed.addField(category.id.replace(/(\b\w)/gi, lc => lc.toUpperCase()), `${category.filter(cmd => cmd.aliases.length > 0).map(cmd => `\`${cmd.aliases[0]}\``).join(" ")}`);
		}
		await message.util.send({ embed });

		return undefined;
	}
}

module.exports = HelpCommand;
