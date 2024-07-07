const fs = require('fs');

module.exports = (client4) => {
const eventFiles = fs.readdirSync('./events4').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../events4/${file}`);
    if (event.once) {
        client4.once(event.name, (...args) => event.execute(client4, ...args));
    } else {
        client4.on(event.name, (...args) => event.execute(client4, ...args));
    }
}
}

