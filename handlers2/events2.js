const fs = require('fs');

module.exports = (client2) => {
const eventFiles = fs.readdirSync('./events2').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../events2/${file}`);
    if (event.once) {
        client2.once(event.name, (...args) => event.execute(client2, ...args));
    } else {
        client2.on(event.name, (...args) => event.execute(client2, ...args));
    }
}
}

