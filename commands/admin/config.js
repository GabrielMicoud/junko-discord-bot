const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const { DEFAULTSETTINGS: defaults } = require("../../config");

module.exports.run = async (client, message, args, settings) => {
    //s'il n'y a pas d'argument
    if(!args.length) {
        const genericMessage = `Les commandes de configuration disponibles sont: \`prefix\`, \`welcomechannel\`, \`goodbyechannel\`, \`welcome\`, \`goodbye\`, \`moonreply\`, \`pressFreply\`, \`direply\` et \`pingreply\`\n.\nTape \`${settings.prefix}config <commande>\` pour avoir plus de détails sur le fonctionnement d'une commande précise\n.`

        const prefixMessage = `La commande \`prefix\` te permet de connaître le préfixe actuel en tapant \`${settings.prefix}config prefix\`, ou bien de le changer en tapant \`${settings.prefix}config prefix <nouveau préfixe>\`\n.`;

        let welcomeChannelMessage = `La commande \`welcomechannel\` te permet de connaître le salon de bienvenue en tapant \`${settings.prefix}config welcomechannel\`, ou bien de le changer en tapant \`${settings.prefix}config welcomechannel <salon mentionné>\`\n.`;
        if(settings.welcomeChannel == defaults.welcomeChannel) welcomeChannelMessage += `\n*Note: Le salon de bienvenue n'est pas encore configuré dans le serveur. Tape \`${settings.prefix}config welcomechannel <salon mentionné>\` pour le configurer*\n.`;

        let goodbyeChannelMessage = `La commande \`goodbyechannel\` te permet de connaître le salon d'adieu en tapant \`${settings.prefix}config goodbyechannel\`, ou bien de le changer en tapant \`${settings.prefix}config goodbyechannel <salon mentionné>\`\n.`;
        if(settings.goodbyeChannel == defaults.goodbyeChannel) goodbyeChannelMessage += `\n*Note: Le salon d'adieu n'est pas encore configuré dans le serveur. Tape \`${settings.prefix}config goodbyechannel <salon mentionné>\` pour le configurer*\n.`;

        const welcomeEnabledMessage = `La commande \`welcome\` te permet de savoir si les messages de bienvenue sont activés en tapant \`${settings.prefix}config welcome\`, et de les activer ou désactiver en tapant \`${settings.prefix}config welcome on\` ou \`${settings.prefix}config welcome off\`\n.`;

        const goodbyeEnabledMessage = `La commande \`goodbye\` te permet de savoir si les messages d'adieu sont activés en tapant \`${settings.prefix}config goodbye\`, et de les activer ou désactiver en tapant \`${settings.prefix}config goodbye on\` ou \`${settings.prefix}config goodbye off\`\n.`;

        const moonReplyEnabledMessage = `La commande \`moonreply\` te permet de savoir si les réponses au mot 'Lune' sont activées en tapant \`${settings.prefix}config moonreply\`, et de les activer ou désactiver en tapant \`${settings.prefix}config moonreply on\` ou \`${settings.prefix}config moonreply off\`\n.`;

        const pressFReplyEnabledMessage = `La commande \`pressFreply\` te permet de savoir si les réactions 'F' sont activées en tapant \`${settings.prefix}config pressFreply\`, et de les activer ou désactiver en tapant \`${settings.prefix}config pressFreply on\` ou \`${settings.prefix}config pressFreply off\`\n.`;

        const diReplyEnabledMessage = `La commande \`direply\` te permet de savoir si les réponses aux 'Di-' sont activées en tapant \`${settings.prefix}config direply\`, et de les activer ou désactiver en tapant \`${settings.prefix}config direply on\` ou \`${settings.prefix}config direply off\`\n.`;
        
        const pingReplyEnabledMessage = `La commande \`pingreply\` te permet de savoir si les réponses aux mentions de Junko sont activées en tapant \`${settings.prefix}config pingreply\`, et de les activer ou désactiver en tapant \`${settings.prefix}config pingreply on\` ou \`${settings.prefix}config pingreply off\``;

        const embed = new MessageEmbed()
            .setTitle(`Voici la commande \`config\``)
            .setColor("#2B7DF5")
            .setDescription(genericMessage)
            .addField('❗ - PREFIX', prefixMessage)
            .addField('#️⃣ - WELCOMECHANNEL', welcomeChannelMessage)
            .addField('#️⃣ - GOODBYECHANNEL', goodbyeChannelMessage)
            .addField('🙌 - WELCOME', welcomeEnabledMessage)
            .addField('👋 - GOODBYE', goodbyeEnabledMessage)
            .addField('🌝 - MOONREPLY', moonReplyEnabledMessage)
            .addField('🇫 - PRESSFREPLY', pressFReplyEnabledMessage)
            .addField('😏 - DIREPLY', diReplyEnabledMessage)
            .addField('🎯 - PINGREPLY', pingReplyEnabledMessage);
        
        return message.channel.send (embed);
    }

    //s'il y a des arguments

    const getSetting = args[0];
    newSetting = args.slice(1).join(" ");
    //$config prefix <préfixe>

    switch(getSetting) {
        case "prefix": {
            if(newSetting) {
                await client.updateGuild(message.guild, {prefix: newSetting});
                return message.channel.send(`**Préfixe mis à jour :** \`${settings.prefix}\` -> \`${newSetting}\`. Utilise la commande \`${newSetting}config prefix <nouveau préfixe>\` pour le changer à nouveau.`).then(m => m.pin({reason: 'prefix update'}));
            } else {
                message.channel.send(`Préfixe actuel : \`${settings.prefix}\`. Tape \`${settings.prefix}config prefix <nouveau préfixe>\` pour le changer.`);
            }
            break;
        }
        case "welcomechannel": {
            if(newSetting) {
                if(message.mentions.channels && message.mentions.channels.first().type == "text") { 
                    const channelID = message.mentions.channels.first().id;
                    await client.updateGuild(message.guild, {welcomeChannel: channelID});
                    return message.channel.send(`Salon de bienvenue mis à jour: ${message.mentions.channels.first()}`);
                } else {
                    message.channel.send("Aïe... il faut mentionner un salon de texte que tu veux utiliser pour cette commande.");
                }
            } else {
                if(settings.welcomeChannel == defaults.welcomeChannel) message.channel.send(`Le salon de bienvenue n'est pas encore configuré. Pour cela, il faut taper la commande \`${settings.prefix}config welcomechannel <salon mentionné>\``);
                else message.channel.send(`Le salon de bienvenue actuel est: ${client.channels.cache.get(settings.welcomeChannel)}. Tape \`${settings.prefix}config welcomechannel <salon mentionné>\` pour le changer.`);
            }
            break;
        }
        case "goodbyechannel": {
            if(newSetting) {
                if(message.mentions.channels && message.mentions.channels.first().type == "text") { 
                    const channelID = message.mentions.channels.first().id;
                    await client.updateGuild(message.guild, {goodbyeChannel: channelID});
                    return message.channel.send(`Salon d'adieu mis à jour: ${message.mentions.channels.first()}`);
                } else {
                    message.channel.send("Aïe... il faut mentionner un salon de texte que tu veux utiliser pour cette commande.");
                }
            } else {
                if(settings.goodbyeChannel == defaults.goodbyeChannel) message.channel.send(`Le salon de bienvenue n'est pas encore configuré. Pour cela, il faut taper la commande \`${settings.prefix}config goodbyechannel <salon mentionné>\``);
                else message.channel.send(`Le salon d'adieu actuel est: ${client.channels.cache.get(settings.goodbyeChannel)}. Tape \`${settings.prefix}config goodbyechannel <salon mentionné>\` pour le changer.`);
            }
            break;
        }
        case "welcome": {
            if(newSetting) {
                if (newSetting == "off"){
                    await client.updateGuild(message.guild, {joinMessageEnabled: false});
                    return message.channel.send(`Messages de bienvenue désactivés. Utilisez la commande \`${settings.prefix}config welcome on\` pour les activer.`);
                } else if (newSetting == "on"){
                    await client.updateGuild(message.guild, {joinMessageEnabled: true});
                    return message.channel.send(`Messages de bienvenue activés. Utilisez la commande \`${settings.prefix}config welcome off\` pour les désactiver.`);
                } else {
                    return message.channel.send(`Erreur dans le choix de l'activation des messages de bienvenue. Utilisez les commandes \`${settings.prefix}config welcome on\` ou \`${settings.prefix}config welcome off\` pour activer ou désactiver les messages.`);
                }
            } else {
                if (settings.joinMessageEnabled == true) message.channel.send(`Les messages de bienvenue sont activés. Utilisez la commande \`${settings.prefix}config welcome off\` pour les désactiver.`);
                else message.channel.send(`Les messages de bienvenue sont désactivés. Utilisez la commande \`${settings.prefix}config welcome on\` pour les activer.`);
            }
            break;
        }
        case "goodbye": {
            if(newSetting) {
                if (newSetting == "off"){
                    await client.updateGuild(message.guild, {leaveMessageEnabled: false});
                    return message.channel.send(`Messages d'adieu désactivés. Utilisez la commande \`${settings.prefix}config goodbye on\` pour les activer.`);
                } else if (newSetting == "on"){
                    await client.updateGuild(message.guild, {leaveMessageEnabled: true});
                    return message.channel.send(`Messages d'adieu activés. Utilisez la commande \`${settings.prefix}config goodbye off\` pour les désactiver.`);
                } else {
                    return message.channel.send(`Erreur dans le choix de l'activation des messages d'adieu. Utilisez les commandes \`${settings.prefix}config goodbye on\` ou \`${settings.prefix}config goodbye off\` pour activer ou désactiver les messages.`);
                }
            } else {
                if (settings.leaveMessageEnabled == true) message.channel.send(`Les messages d'adieu sont activés. Utilisez la commande \`${settings.prefix}config goodbye off\` pour les désactiver.`);
                else message.channel.send(`Les messages d'adieu sont désactivés. Utilisez la commande \`${settings.prefix}config goodbye on\` pour les activer.`);
            }
            break;
        }
        case "moonreply": {
            if(newSetting) {
                if (newSetting == "off"){
                    await client.updateGuild(message.guild, {moonReplyEnabled: false});
                    return message.channel.send(`Réponses au mot 'Lune' désactivées. Utilisez la commande \`${settings.prefix}config moonreply on\` pour les activer.`);
                } else if (newSetting == "on"){
                    await client.updateGuild(message.guild, {moonReplyEnabled: true});
                    return message.channel.send(`Réponses au mot 'Lune' activées. Utilisez la commande \`${settings.prefix}config moonreply off\` pour les désactiver.`);
                } else {
                    return message.channel.send(`Erreur dans le choix de l'activation des réponses au mot 'Lune'. Utilisez les commandes \`${settings.prefix}config moonreply on\` ou \`${settings.prefix}config moonreply off\` pour activer ou désactiver les réponses.`);
                }
            } else {
                if (settings.moonReplyEnabled == true) message.channel.send(`Les réponses au mot 'Lune' sont activées. Utilisez la commande \`${settings.prefix}config moonreply off\` pour les désactiver.`);
                else message.channel.send(`Les réponses au mot 'Lune' sont désactivées. Utilisez la commande \`${settings.prefix}config moonreply on\` pour les activer.`);
            }
            break;
        }
        case "pressFreply": {
            if(newSetting) {
                if (newSetting == "off"){
                    await client.updateGuild(message.guild, {pressFReplyEnabled: false});
                    return message.channel.send(`Réactions 'F' désactivées. Utilisez la commande \`${settings.prefix}config pressFreply on\` pour les activer.`);
                } else if (newSetting == "on"){
                    await client.updateGuild(message.guild, {pressFReplyEnabled: true});
                    return message.channel.send(`Réactions 'F' activées. Utilisez la commande \`${settings.prefix}config pressFreply off\` pour les désactiver.`);
                } else {
                    return message.channel.send(`Erreur dans le choix de l'activation des réactions 'F'. Utilisez les commandes \`${settings.prefix}config pressFreply on\` ou \`${settings.prefix}config pressFreply off\` pour activer ou désactiver les réactions.`);
                }
            } else {
                if (settings.pressFReplyEnabled == true) message.channel.send(`Les réactions 'F' sont activées. Utilisez la commande \`${settings.prefix}config pressFreply off\` pour les désactiver.`);
                else message.channel.send(`Les réactions 'F' sont désactivées. Utilisez la commande \`${settings.prefix}config pressFreply on\` pour les activer.`);
            }
            break;
        }
        case "direply": {
            if(newSetting) {
                if (newSetting == "off"){
                    await client.updateGuild(message.guild, {diReplyEnabled: false});
                    return message.channel.send(`Réponses aux 'Di-' désactivées. Utilisez la commande \`${settings.prefix}config direply on\` pour les activer.`);
                } else if (newSetting == "on"){
                    await client.updateGuild(message.guild, {diReplyEnabled: true});
                    return message.channel.send(`Réponses aux 'Di-' activées. Utilisez la commande \`${settings.prefix}config direply off\` pour les désactiver.`);
                } else {
                    return message.channel.send(`Erreur dans le choix de l'activation des réponses aux 'Di-'. Utilisez les commandes \`${settings.prefix}config direply on\` ou \`${settings.prefix}config direply off\` pour activer ou désactiver les réponses.`);
                }
            } else {
                if (settings.diReplyEnabled == true) message.channel.send(`Les réponses aux 'Di-' sont activées. Utilisez la commande \`${settings.prefix}config direply off\` pour les désactiver.`);
                else message.channel.send(`Les réponses aux 'Di-' sont désactivées. Utilisez la commande \`${settings.prefix}config direply on\` pour les activer.`);
            }
            break;
        }
        case "pingreply": {
            if(newSetting) {
                if (newSetting == "off"){
                    await client.updateGuild(message.guild, {pingReplyEnabled: false});
                    return message.channel.send(`Réponses aux mentions de Junko désactivées. Utilisez la commande \`${settings.prefix}config pingreply on\` pour les activer.`);
                } else if (newSetting == "on"){
                    await client.updateGuild(message.guild, {pingReplyEnabled: true});
                    return message.channel.send(`Réponses aux mentions de Junko activées. Utilisez la commande \`${settings.prefix}config pingreply off\` pour les désactiver.`);
                } else {
                    return message.channel.send(`Erreur dans le choix de l'activation des réponses aux mentions de Junko. Utilisez les commandes \`${settings.prefix}config pingreply on\` ou \`${settings.prefix}config pingreply off\` pour activer ou désactiver les réponses.`);
                }
            } else {
                if (settings.pingReplyEnabled == true) message.channel.send(`Les réponses aux mentions de Junko sont activées. Utilisez la commande \`${settings.prefix}config pingreply off\` pour les désactiver.`);
                else message.channel.send(`Les réponses aux mentions de Junko sont désactivées. Utilisez la commande \`${settings.prefix}config pingreply on\` pour les activer.`);
            }
            break;
        }
        //ajouter les case log channel, welcome channel, leaving channel, enable join, leave, moon, di et press F
    }
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;