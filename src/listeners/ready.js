const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        this.client.user.setActivity(`type @Moni help`)
        console.log(`[READY] ${this.client.user.tag}`)
    }
}

module.exports = ReadyListener;