const { AkairoClient } = require('discord-akairo');

const client = new AkairoClient({
    ownerID: '447916021198749696',
    prefix: ['.', 'm!', '!'],
    allowMention: true,
    commandDirectory: './src/commands/',
    inhibitorDirectory: './src/inhibitors/',
    listenerDirectory: './src/listeners/'
});

const ms = require("ms");

const fs = require("fs");

const request = require('request');

const token = process.env.DISCORD_BOT_SECRET;

const keep_alive = require('./keep_alive.js')

// Dont Change ^^^

client.on('ready', async () => {
  console.log('I am on and ready to work for you!');

  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);

  client.on('ready', async () => console.log('Yo this ready!'));

client.on('disconnect', async () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', async () => console.log('I am reconnecting now!'));

   client.user.setActivity(`type !src | ${client.guilds.size} Servers | ${client.users.size} Users`);
});

client.login('NTUwNDYwMTYwODI5ODE2ODMz.D3206g.C8TEjSc-LsSmc8YTqkdHYs8KmoA');
