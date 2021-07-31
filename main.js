const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require ("./util/loader");

const client = new Client();
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");

let collections = [
    "commands",
    "cooldowns",
];
collections.forEach(x => client[x] = new Collection()); //on crée une collection pour chaque élément du tableau collections

loadCommands(client);
loadEvents(client);


client.mongoose.init();

client.login(client.config.TOKEN);