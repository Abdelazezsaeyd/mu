const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const db = require('best.db');

const { joinVoiceChannel } = require('@discordjs/voice');
const distube = require('../client/distube6');
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
  name: 'ready',
  once: true,
  execute(client6) {
    try {
      console.log(distube + "client 5")
      console.log((`Logged in as ${client6.user.tag}`).red);
      console.log((`Servers: ${client6.guilds.cache.size}`).magenta, (`Users: ${client6.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`).yellow, (`Commands: ${client6.commands.size}`).green);

      client6.user.setStatus("idle")
      client6.user.setActivity(`𝖢𝖺𝗅.𝖢𝗂𝗈 𝖠𝗏𝗍.6`, { type: ActivityType.Playing })


      setInterval(async () => {
        client6.guilds.cache.forEach(async g => {

          let vch = await db.get(`24_726_${g.id}`) || "1253096678840336434" 
          console.log(vch)
          if (vch == null) return;
          let ch = client6.channels.cache.get(vch);

          if (ch == null) return db.delete(`24_726_${g.id}`)
          const clientMember = g.members.cache.get(client6.user.id);

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