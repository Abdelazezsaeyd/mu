 const { prefix } = require('../config4.json');
const { Collection } = require('discord.js');
const delay = new Collection();
const db = require('best.db');
const ms = require('ms');
const axios = require("axios").default;
const { Utils } = require("devtools-ts");
const utilites = new Utils();


module.exports = {
  name: 'messageCreate',
  async execute(client4, message) {
    try {
      //console.log(client)
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
      try {
        let commandFiles = client4.commands.get(command) || client4.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
        if (!commandFiles) return;
        if (commandFiles) {
          if (commandFiles.cooldown) {

            if (delay.has(`${commandFiles.name}-${message.author.id}`)) return message.reply(`You can use this command again after **${ms(delay.get(`${commandFiles.name}-${message.author.id}`) - Date.now(), { long: true }).includes('ms') ? '0 second' : ms(delay.get(`${commandFiles.name}-${message.author.id}`) - Date.now(), { long: true })}**`);

            commandFiles.execute(client4, message, args);

            delay.set(`${commandFiles.name}-${message.author.id}`, Date.now() + commandFiles.cooldown);
            setTimeout(() => {
              delay.delete(`${commandFiles.name}-${message.author.id}`);
            }, commandFiles.cooldown);
          } else {
            commandFiles.execute(client4, message, args);
          }
        }
      } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
      }
    } catch (err) {
      utilites.logger(err)
    }
  }
}