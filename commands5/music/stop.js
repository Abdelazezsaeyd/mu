const { EmbedBuilder } = require("discord.js");
const distube = require('../../client/distube5')
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
    name: "stop",
    description: "Stop the current song and clears the entire music queue.",
    cooldown: 5000,
    aliases: ['st', 'ايقاف', 'وقف'],
    async execute(client5, message, args) {
        try {
            if (message.guild.members.me.voice?.channelId && message.member.voice.channelId !== message.guild.members.me?.voice?.channelId) return message.reply({ content: `:no_entry_sign: You must be listening in \`${message.guild.members.me?.voice?.channel.name}\` to use that!` });
            if (!message.member.voice.channel)
                return message.reply({ content: ":no_entry_sign: You must join a voice channel to use that!" })
            const queue = distube.getQueue(message)
            if (!queue) return message.reply({ content: `:no_entry_sign: There must be music playing to use that!` })
            message.react(`⏹`)
            message.reply({ content: `:stop_button: The player has stopped and the queue has been cleared.` })
            return distube.stop(message);
        } catch (err) {
            utilites.logger(err)
        }
    },
};