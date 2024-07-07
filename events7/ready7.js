const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const db = require('best.db');

const { joinVoiceChannel } = require('@discordjs/voice');
const distube = require('../client/distube7');
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
  name: 'ready',
  once: true,
  execute(client7) {
    try {
      console.log(distube + "client 5")
      console.log((`Logged in as ${client7.user.tag}`).red);
      console.log((`Servers: ${client7.guilds.cache.size}`).magenta, (`Users: ${client7.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`).yellow, (`Commands: ${client7.commands.size}`).green);

      client7.user.setStatus("idle")
      client7.user.setActivity(`𝖢𝖺𝗅.𝖢𝗂𝗈 𝖠𝗏𝗍.7`, { type: ActivityType.Playing })


      setInterval(async () => {
        client7.guilds.cache.forEach(async g => {

          let vch = await db.get(`24_727_${g.id}`) || "1255517911863267418" 
          console.log(vch)
          if (vch == null) return;
          let ch = client7.channels.cache.get(vch);

          if (ch == null) return db.delete(`24_727_${g.id}`)
          const clientMember = g.members.cache.get(client7.user.id);

          const checkJoined = clientMember?.voice?.channelId == ch.id;
          if (!checkJoined) {
            console.log(checkJoined)
            try {
              await distube.voices.join(ch)

            } catch (e) {
              console.log("connection", e);
            }
          }
        })
      }, 7000)

    } catch (err) {
      utilites.logger(`Client 5 ${err} `)
    }
  }
};