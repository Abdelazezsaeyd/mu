const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const db = require('best.db');

const { joinVoiceChannel } = require('@discordjs/voice');
const distube = require('../client/distube8');
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
  name: 'ready',
  once: true,
  execute(client8) {
    try {
      console.log(distube + "client 5")
      console.log((`Logged in as ${client8.user.tag}`).red);
      console.log((`Servers: ${client8.guilds.cache.size}`).magenta, (`Users: ${client8.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`).yellow, (`Commands: ${client8.commands.size}`).green);

      client8.user.setStatus("idle")
      client8.user.setActivity(`𝖢𝖺𝗅.𝖢𝗂𝗈 𝖠𝗏𝗍.8`, { type: ActivityType.Playing })


      setInterval(async () => {
        client8.guilds.cache.forEach(async g => {

          let vch = await db.get(`24_728_${g.id}`) || "1254713842496438352" 
          console.log(vch)
          if (vch == null) return;
          let ch = client8.channels.cache.get(vch);

          if (ch == null) return db.delete(`24_728_${g.id}`)
          const clientMember = g.members.cache.get(client8.user.id);

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