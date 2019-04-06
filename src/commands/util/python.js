const { Command } = require('discord-akairo');

class PythonCommand extends Command {
    constructor() {
        super('python', {
            aliases: ['python', 'py'],
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Python Links To Learn',
                usage: '!py',
                examples: ['py', 'python']
            }
        });
    }

    exec(message) {
        if(message.guild.id === "550140222822809610") {
            return message.util.send([
                `**Learn Python**`,
                '',
                `Python.org − Official Python site. Find a complete list of all documentation, installation, tutorials, news etc.`,
                'Web Programming in Python − (https://wiki.python.org/moin/WebProgramming) This topic guide attempts to cover every aspect of programming Web applications (both clients and servers) using Python.',
                `PyCharm IDE − (https://www.jetbrains.com/pycharm/) PyCharm IDE is a powerful integrated development environment (IDE) for the Python programming language.`,
                `python.vim − (http://www.vim.org/scripts/script.php?script_id=790) Enhanced version of the python syntax highlighting script.`,
                `Python and XML − (http://pyxml.sourceforge.net/topics/) This Topic Guide links to documentation and code for handling XML in Python.`,
                `Think Python −  (http://www.greenteapress.com/thinkpython/html/index.html) Free book on python. How to think like a computer scientist, by Allen Downey?`,
                '',
                `Tutorial`,
                `=> https://www.youtube.com/watch?v=rfscVS0vtbw`,
                `=> https://www.youtube.com/watch?v=N4mEzFDjqtA`,
            ]);
        }
    }
}

module.exports = PythonCommand;
