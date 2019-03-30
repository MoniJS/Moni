const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        this.client.user.setActivity(`type !src | ${this.client.guilds.size} Servers | ${this.client.users.size} Users`)
        console.log(`${this.client.user.tag} Ready`)
    }
}

module.exports = ReadyListener;