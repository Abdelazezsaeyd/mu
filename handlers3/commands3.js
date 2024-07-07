const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii(`Commands`);
table.setHeading('Command', 'Load Status');

module.exports = (client3) => {
fs.readdirSync('./commands3').forEach((folder) => {
    const commandFiles = fs.readdirSync(`./commands3/${folder}`).filter(file => file.endsWith('.js'));
    for (file of commandFiles) {
        let command = require(`../commands3/${folder}/${file}`);
        if (command.name) {
            client3.commands.set(command.name, command);
            table.addRow(file, '✅');
        } else {
            table.addRow(file, '❌');
            continue;
        }
    }
});
console.log(table.toString());
}