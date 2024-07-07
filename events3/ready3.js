const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const db = require('best.db');
const { prefix } = require('../config3.json');
const { joinVoiceChannel } = require('@discordjs/voice');
const distube = require('../client/distube3');
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
  name: 'ready',
  once: true,
  execute(client3) {
    try {
      console.log((`Logged in as ${client3.user.tag}`).red);
      console.log((`Servers: ${client3.guilds.cache.size}`).magenta, (`Users: ${client3.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`).yellow, (`Commands: ${client3.commands.size}`).green);
      
      client3.user.setStatus("idle")
      client3.user.setActivity(`𝖢𝖺𝗅.𝖢𝗂𝗈 𝖠𝗏𝗍.3`,{ type: ActivityType.Playing })
      
      
      setInterval(async () => {
        client3.guilds.cache.forEach(async g => {
          let vch = await db.get(`24_723_${g.id}`)
          if (vch == null) return;
          let ch = client3.channels.cache.get(vch);
          if (ch == null) return db.delete(`24_723_${g.id}`)
          const clientMember = g.members.cache.get(client3.user.id);
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