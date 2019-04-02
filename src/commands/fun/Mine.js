const { Command } = require('discord-akairo');
const Minesweeper = require('discord.js-minesweeper');

class MineCommand extends Command {
    constructor() {
        super('meme', {
           aliases: ['mine'],
           category: 'util',
           channel: 'guild',
           clientPermissions: ['SEND_MESSAGES'],
           description: {
               content: 'Mine Sweeper with spoiler tags',
               usage: '!mine',
               examples: ['mine 10 10 31', 'mine 5 4 3']
           }
        });
    }

    exec(message) {
         const content = message.content.split(' ');
          const args = content.slice(1);
          const rows = parseInt(args[0]);
  const columns = parseInt(args[1]);
  const mines = parseInt(args[2]);

  if (!rows) {
    return message.channel.send(':warning: Please provide the number of rows.');
  }

  if (!columns) {
    return message.channel.send(':warning: Please provide the number of columns.');
  }

  if (!mines) {
    return message.channel.send(':warning: Please provide the number of mines.');
  }

  const minesweeper = new Minesweeper({ rows, columns, mines });
  const matrix = minesweeper.start();

  return matrix
    ? message.channel.send(matrix)
    : message.channel.send(':warning: You have provided invalid data.');
    }
}

module.exports = MineCommand;
