const { EmbedBuilder } = require("discord.js");
const distube = require('../../client/distube2')
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
    name: "resume",
    description: "Resumes the currently paused track.",
    cooldown: 5000,
    async execute(client, message, args) {
        try {
            if (message.guild.members.me.voice?.channelId && message.member.voice.channelId !== message.guild.members.me?.voice?.channelId) return message.reply({ content: `:no_entry_sign: You must be listening in \`${message.guild.members.me?.voice?.channel.name}\` to use that!` });
            if (!message.member.voice.channel)
                return message.reply({ content: ":no_entry_sign: You must join a voice channel to use that!" })
            const queue = distube.getQueue(message)
            const song = queue.songs[0]
            let name = song.name
            if (!queue) return message.reply({ content: `:no_entry_sign: There must be music playing to use that!` })
            message.react(`▶️`)
            message.reply(`:arrow_forward: Resumed **${name}**.`)
            return distube.resume(message);
        } catch (err) {
            utilites.logger(err)
        }
    },
};