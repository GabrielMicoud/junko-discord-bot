const { Leavemessage } = require("../../models/index");

module.exports = async(client, member) => {
    const settings = await client.getGuild(member.guild);
    if(!settings.leaveMessageEnabled || !client.channels.cache.get(settings.goodbyeChannel)) return;
    const replies = await Leavemessage.find();
    if(!replies) return;
    const index = Math.floor(Math.random() * replies.length);
    const reply = replies[index].reply;
    
    client.channels.cache.get(settings.goodbyeChannel).send(`${member.user.tag} ${reply} \n*Press F to pay respects.*`);
}