const { EmbedBuilder } = require("discord.js");
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
    name: "ping",
    description: `Test the bots response time.`,
    cooldown: 5000,
    async execute(client3, message, args) {
        try {
            message.reply({ content: `:ping_pong: Pong ${client3.ws.ping} ms` })
        } catch (err) {
            utilites.logger(err)
        }
    },
};