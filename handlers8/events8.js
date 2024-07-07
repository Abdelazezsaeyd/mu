const fs = require('fs');

module.exports = (client8) => {
const eventFiles = fs.readdirSync('./events8').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../events8/${file}`);
    if (event.once) {
        client8.once(event.name, (...args) => event.execute(client8, ...args));
    } else {
        client8.on(event.name, (...args) => event.execute(client8, ...args));
    }
}
}

