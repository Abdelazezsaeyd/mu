const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const db = require('best.db');
const { prefix } = require('../config5.json');
const { joinVoiceChannel } = require('@discordjs/voice');
const distube = require('../client/distube5');
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
  name: 'ready',
  once: true,
  execute(client5) {
    try {
      console.log(distube + "client 5")
      console.log((`Logged in as ${client5.user.tag}`).red);
      console.log((`Servers: ${client5.guilds.cache.size}`).magenta, (`Users: ${client5.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`).yellow, (`Commands: ${client5.commands.size}`).green);
      
      client5.user.setStatus("idle")
      client5.user.setActivity(`𝖢𝖺𝗅.𝖢𝗂𝗈 𝖠𝗏𝗍.5`, { type: ActivityType.Playing })
      
      
      setInterval(async () => {
        client5.guilds.cache.forEach(async g => {
          
          let vch = await db.get(`24_725_${g.id}`)// || "1245018608942190654" 
          console.log(vch)
          if (vch == null) return;
          let ch = client5.channels.cache.get(vch);
          
          if (ch == null) return db.delete(`24_725_${g.id}`)
          const clientMember = g.members.cache.get(client5.user.id);
          
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