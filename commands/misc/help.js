const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { MESSAGES } = require("../../util/constants");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args, settings) => {
    message.channel.send("Help!");
    //console.log(client.commands.filter(com => com.help.category === 'misc'));

    if (!args.length) {
        const embed = new MessageEmbed()
            .setColor("#36393F")
            .setDescription(`Bienvenue dans l'interface d'aide de Junko !`)
            .addField("🤖 - LISTE DES COMMANDES", `Voici une liste de toutes les commandes disponibles rangées par catégories. Elles sont toutes disponibles avec le préfixe \`${settings.prefix}\` *.\n\nPour plus de détails, tapez \`${settings.prefix}help <nom de la commande>\`.`)
            .setFooter(`*L'interface d'aide est toujours accessible en tapant la commande 'j!help', même si Junko a été configuré avec un autre préfixe sur ce serveur`);

        for (const category of categoryList) {
            if (!(category == "sadmin" && !(message.author.id == "216253896744632321" && message.member.hasPermission('ADMINISTRATOR')))) { //si c'est pas la catégorie "sadmin", ou si c'est le créateur qui a tapé la commande et que c'est un admin du serveur dans lequel il a tapé la commande, la catégorie est affichée 
                embed.addField(`♦️ - ${category.toUpperCase()}`, `${client.commands.filter(com => com.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(", ")}`);
                //embed.addField('Field ajouté', 'Valeur ajoutée');
            }   
        }
        message.channel.send(embed);
    } else {
        const command = client.commands.get(args[0]);
        const embed = new MessageEmbed()
            .setColor("#36393F")
            .setTitle(`COMMANDE \`${command.help.name}\``)
            .addField("📖 - DESCRIPTION", `${command.help.description} (cooldown: ${command.help.cooldown}s)`)
            .addField("✅ - UTILISATION", command.help.usage ? `\`${settings.prefix}${command.help.name} ${command.help.usage}\`` : `\`${settings.prefix}${command.help.name}\``, true)
            .setFooter(`L'interface d'aide est toujours accessible en tapant la commande 'j!help', même si Junko a été configuré avec un autre préfixe sur ce serveur`);
        return message.channel.send(embed);
    }
}

module.exports.help = MESSAGES.COMMANDS.MISC.HELP;