require('dotenv').config();

const Client = require('./src/client/Client');
const client = new Client({ owner: process.env.OWNER, token: process.env.TOKEN });

client.on('disconnect', () => console.log('[CLIENT DISCONNECTED]'))
	.on('reconnect', () => console.log('[CLIENT RECONNECTING]'))
	.on('error', err => console.log(`[CLIENT ERROR] ${err.message}`))
	.on('warn', warn => console.log(`[CLIENT WARN] ${warn}`));

client.start(); 

process.on('unhandledRejection', err => {
	console.error(`[UNHANDLED REJECTION] ${err.message}`);
});

