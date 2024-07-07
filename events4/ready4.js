const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const db = require('best.db');
const { prefix } = require('../config4.json');
const { joinVoiceChannel } = require('@discordjs/voice');
const distube = require('../client/distube4');
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
  name: 'ready',
  once: true,
  execute(client4) {
    try {
      console.log((`Logged in as ${client4.user.tag}`).red);
      console.log((`Servers: ${client4.guilds.cache.size}`).magenta, (`Users: ${client4.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`).yellow, (`Commands: ${client4.commands.size}`).green);
      
      client4.user.setStatus("idle")
      client4.user.setActivity(`𝖢𝖺𝗅.𝖢𝗂𝗈 𝖠𝗏𝗍.4`, { type: ActivityType.Playing })
      
      
      setInterval(async () => {
        client4.guilds.cache.forEach(async g => {
          let vch = await db.get(`24_724_${g.id}`)
          if (vch == null) return;
          let ch = client4.channels.cache.get(vch);
          if (ch == null) return db.delete(`24_724_${g.id}`)
          const clientMember = g.members.cache.get(client4.user.id);
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
      utilites.logger(err)
    }
  }
};