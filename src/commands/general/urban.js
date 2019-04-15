const { Command } = require("discord-akairo");
const fetch = require("node-fetch");
const querystring = require("querystring");

class UrbanCommand extends Command {
  constructor() {
    super("Urban", {
      aliases: ["ping", "pong"],
      category: "general",
      channel: "guild",
      clientPermissions: ["SEND_MESSAGES"],
      description: {
        content: "Searchs Urban Dictionary",
        examples: ["hello world"]
      }
    });
  }

  async exec(message) {
    if (!args.length) {
      return message.channel.send("You need to supply a search term!");
    }

    const query = querystring.stringify({ term: args.join(" ") });

    const { body } = await fetch
      .get(`https://api.urbandictionary.com/v0/define${query}`)
      .then(response => response.json());

    if (!body.list.length) {
      return message.channel.send(
        `No results found for **${args.join(" ")}**.`
      );
    }

    const [answer] = body.list;

    const embed = this.client.util
      .embed()
      .setColor("RANDOM")
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addField("Definition", trim(answer.definition, 1024))
      .addField("Example", trim(answer.example, 1024))
      .addField(
        "Rating",
        `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`
      );

    message.channel.send(embed);
  }
}

module.exports = UrbanCommand;
