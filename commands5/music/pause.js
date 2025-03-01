const { EmbedBuilder } = require("discord.js");
const distube = require('../../client/distube5')
const { prefix } = require('../../config5.json');
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
    name: "pause",
    description: "Pauses the currently playing track.",
    cooldown: 5000,
    async execute(client5, message, args) {
        try {
            if (message.guild.members.me.voice?.channelId && message.member.voice.channelId !== message.guild.members.me?.voice?.channelId) return message.reply({ content: `:no_entry_sign: You must be listening in \`${message.guild.members.me?.voice?.channel.name}\` to use that!` });
            if (!message.member.voice.channel)
                return message.reply({ content: ":no_entry_sign: You must join a voice channel to use that!" })
            const queue = distube.getQueue(message)
            if (!queue) return message.reply({ content: `:no_entry_sign: There must be music playing to use that!` })
            const song = queue.songs[0]
            let name = song.name
            if (queue.paused) {
                message.reply({ content: `:no_entry_sign: **${name}** has been Paused!` })
            } else {
                distube.pause(message);
                message.react(`⏸️`)
                message.reply({ content: `:pause_button: Paused **${name}** . Type \`${prefix}resume\` to unpause!` })
            }
        } catch (err) {
            utilites.logger(err)
        }
    },
};
