const { MessageEmbed } = require("discord.js");
const { Joinmessage } = require("../../models/index");

module.exports = async (client, member) => {
    const settings = await client.getGuild(member.guild);
    if(!settings.joinMessageEnabled || !client.channels.cache.get(settings.welcomeChannel)) return;
    const replies = await Joinmessage.find();
    if(!replies) return;
    const index = Math.floor(Math.random() * replies.length);
    const reply = replies[index].reply;

    const embed = new MessageEmbed()
        .setTitle(`BIENVENUE ${member.displayName} !`)
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(reply)
        .setColor("#35FFD7")
        .setTimestamp();

    client.channels.cache.get(settings.welcomeChannel).send(embed);
}