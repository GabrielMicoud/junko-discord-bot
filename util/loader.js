const { readdirSync } = require("fs");

//RÉCUPÉRATION DES COMMANDES DANS LE DOSSIER "commands"

const loadCommands = (client, dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        for(const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée : ${getFileName.help.name}`);
        };
    });
};

//RÉCUPÉRATION DES ÉVÉNEMENTS DANS LE DOSSIER "events"

const loadEvents = (client, dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js")); // on récupère les noms des fichiers (qui se terminent par .js)
        for(const event of events) {
            const evt = require(`../${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0]; //on enlève le .js du nom, en séparant le nom en deux au niveau du point, et en récupérant la première partie.
            client.on(evtName, evt.bind(null, client)); //lie les paramètres au nom de l'événement. Ex: client.on("message", (client, message) => {})
            console.log(`Événement chargé : ${evtName}`);
        };
    });
};

//EXPORTATION

module.exports = {
    loadCommands,
    loadEvents,
}