const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii(`Commands`);
table.setHeading('Command', 'Load Status');

module.exports = (client4) => {
fs.readdirSync('./commands4').forEach((folder) => {
    const commandFiles = fs.readdirSync(`./commands4/${folder}`).filter(file => file.endsWith('.js'));
    for (file of commandFiles) {
        let command = require(`../commands4/${folder}/${file}`);
        if (command.name) {
            client4.commands.set(command.name, command);
            table.addRow(file, '✅');
        } else {
            table.addRow(file, '❌');
            continue;
        }
    }
});
console.log(table.toString());
}