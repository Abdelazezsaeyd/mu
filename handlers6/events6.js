const fs = require('fs');

module.exports = (client6) => {
const eventFiles = fs.readdirSync('./events6').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../events6/${file}`);
    if (event.once) {
        client6.once(event.name, (...args) => event.execute(client6, ...args));
    } else {
        client6.on(event.name, (...args) => event.execute(client6, ...args));
    }
}
}

