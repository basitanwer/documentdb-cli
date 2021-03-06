(function () {
    "use strict";

    var Q = require('q');

    class HelpCommand {
        constructor() {
            this.prefix = '.help';
            this.usage = '.help';
            this.description = 'Shows this message';
        }

        run(messages, writer) {
            var commands = require('./index').createAll(null /*db*/);

            var doc = commands.map(function (cmd) {
                return {
                    command: cmd.usage,
                    description: cmd.description
                };
            });
            writer.write(doc);

            return new Q(); // resolved promise
        }
    }

    module.exports = exports = HelpCommand;

} ());