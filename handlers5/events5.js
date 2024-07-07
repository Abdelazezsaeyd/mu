const fs = require('fs');

module.exports = (client5) => {
const eventFiles = fs.readdirSync('./events5').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../events5/${file}`);
    if (event.once) {
        client5.once(event.name, (...args) => event.execute(client5, ...args));
    } else {
        client5.on(event.name, (...args) => event.execute(client5, ...args));
    }
}
}

