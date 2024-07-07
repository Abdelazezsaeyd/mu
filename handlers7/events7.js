const fs = require('fs');

module.exports = (client7) => {
const eventFiles = fs.readdirSync('./events7').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../events7/${file}`);
    if (event.once) {
        client7.once(event.name, (...args) => event.execute(client7, ...args));
    } else {
        client7.on(event.name, (...args) => event.execute(client7, ...args));
    }
}
}

