const fs = require('fs');
const ascii = require('ascii-table');
const { prefix } = require('../config5.json');
let table = new ascii(`Commands`);
table.setHeading('Command', 'Load Status');

module.exports = (client5) => {
fs.readdirSync('./commands5').forEach((folder) => {
    const commandFiles = fs.readdirSync(`./commands5/${folder}`).filter(file => file.endsWith('.js'));
    for (file of commandFiles) {
        let command = require(`../commands5/${folder}/${file}`);
        if (command.name) {
            client5.commands.set(command.name, command);
            table.addRow(file, '✅');
        } else {
            table.addRow(file, '❌');
            continue;
        }
    }
});
console.log(table.toString());
}