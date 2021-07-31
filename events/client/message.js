const { Collection } = require('discord.js');
const { pressF, moon, di, pingreply } = require ('../../util/event-react');

module.exports = async (client, message) => {
    const settings = await client.getGuild(message.guild); //on récupère les paramètres du serveur (préfixe et channel de log)

    //RÉACTIONS AUX MESSAGES
    //incluant les messages de Junko

    if(message.content.toUpperCase().includes('PRESS F') && settings.pressFReplyEnabled) pressF(client, message);
    
    //N'incluant pas les messages de Junko
    
    if(message.author.bot) return;
    if(message.content.toUpperCase().includes('DI') && settings.diReplyEnabled) di(client, message);
    if(message.content.toUpperCase().includes('LUNE') && settings.moonReplyEnabled) moon(client, message);
    if((message.mentions.has("857955014220054579")||message.mentions.has("870062013890592769")) && !message.member.hasPermission('MANAGE_MESSAGES') && settings.pingReplyEnabled) pingreply(client, message);

    //COMMANDES

    if(!message.content.startsWith(settings.prefix) && !message.content.startsWith("j!help")) return; //le bot ne détecte pas ses propres messages, ni ceux qui ne sont pas des commandes
    if(message.content.startsWith(settings.prefix)){
        var args = message.content.slice(settings.prefix.length).split(/ +/); //découpe les arguments des commandes //$user palmier caviar café --> ['user', 'palmier', 'caviar', 'café']
    } else { //le message commence par "j!help"
        var args = message.content.slice(2).split(/ +/);
    }

    const commandName = args.shift().toLowerCase(); //prend le premier argument (le nom de la commande) //$user palmier caviar café --> user

    if(!client.commands.has(commandName)) return; //si la commande n'existe pas, le bot n'exécute rien.

    //vérification des arguments de la commande et des permissions

    const command = client.commands.get(commandName); //on vérifie si la commande a eu les bons arguments
    if(command.help.argsNeeded && !args.length) {
        let noArgsReply = `Aïe... il manque des informations à ta commande ${message.author} :/ \nPour qu'elle soit bien exécutée, il faut que tu tapes ceci :\n\`${settings.prefix}${command.help.name} `;
        if(command.help.usage) noArgsReply += `${command.help.usage}\``;
        return message.channel.send(noArgsReply);
    };

    if(command.help.isUserAdmin && !message.member.hasPermission('MANAGE_MESSAGES')){ //on vérifie si l'utilisateur a bien le droit de taper la commande
        return message.channel.send(`Aïe... ${message.author} il te faut la permission \`Gérer les messages\` pour pouvoir utiliser cette commande.`)
    }
    
    //set et vérification des cooldowns

    if(!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection()); //une collection pour chaque commande
    }
    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name); //obtention de la commande qu'on vérifie
    const cdAmount = (command.help.cooldown || 0) * 1000; //cooldown en millisecondes, par défaut zéro

    if(tStamps.has(message.author.id)) { //si la collection de la commande comporte l'id de l'auteur du message
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount; //on récupère le timestamp de fin
        if(timeNow < cdExpirationTime) { //et on vérifie s'il est passé ou non
            timeLeft = (cdExpirationTime - timeNow) / 1000; //s'il n'est pas passé, on bloque et on retourne le temps restant
            if(timeLeft.toFixed(0) == 0 || timeLeft.toFixed(0) == 1) return message.reply(`Tu ne peux pas réutiliser cette commande avant ${timeLeft.toFixed(0)} seconde.`);
            else return message.reply(`Tu ne peux pas réutiliser cette commande avant ${timeLeft.toFixed(0)} secondes.`);
        }
    }

    tStamps.set(message.author.id, timeNow); //puis on reset le timestamp de fin (ou on le set si l'auteur n'avait pas encore utilisé la commande)
    setTimeout(() => tStamps.delete(message.author.id), cdAmount); //après un certain temps (celui du cooldown), on supprime l'auteur de la collection

    //exécution de la commande

    await command.run(client, message, args, settings);
}
