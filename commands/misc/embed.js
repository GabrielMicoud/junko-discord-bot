const { MessageEmbed, MessageAttachment } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const testImg = new MessageAttachment('./assets/images/welcome_hell.png'); //décrire le chemin à partir de main.js

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
            .setColor("#228922")
            .setTitle("Alors comme ça tu veux un embed ?")
            .setURL("https://www.youtube.com/watch?v=_dakr4zPgPg")
            .setDescription("Plop! Voici un embed... et t'as gagné le droit de cliquer sur le titre de l'embed pour que tu te rendes compte de ce que je pense de toi alors que tu m'as réveillé pendant ma sieste.")
            .setThumbnail(client.user.displayAvatarURL())
            .attachFiles(testImg)
            .setImage('attachment://welcome_hell.png')
            .setTimestamp();
        message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.EMBED;