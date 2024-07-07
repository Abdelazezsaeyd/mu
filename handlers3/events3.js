const fs = require('fs');

module.exports = (client3) => {
const eventFiles = fs.readdirSync('./events3').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../events3/${file}`);
    if (event.once) {
        client3.once(event.name, (...args) => event.execute(client3, ...args));
    } else {
        client3.on(event.name, (...args) => event.execute(client3, ...args));
    }
}
}

