const mongoose = require("mongoose");
const { MESSAGES } = require("../../util/constants");
const { Leavemessage } = require ("../../models/index");

module.exports.run = async (client, message, args) => {
    if(message.author.id !== "216253896744632321") return; //Si c'est pas Gaby #6272 qui exécute ce bot, rien ne se passe.
    const newLeaveMessage = {
        reply: args.slice(0).join(" "),
    }
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, newLeaveMessage);
    const createLeaveMessage = await new Leavemessage(merged);
    createLeaveMessage.save().then(m => console.log(`Nouveau message d'adieu ! -> ${m.reply}`));
};

module.exports.help = MESSAGES.COMMANDS.SADMIN.LEAVEMESSAGE;