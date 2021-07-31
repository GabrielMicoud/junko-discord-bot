const mongoose = require("mongoose");
const { MESSAGES } = require("../../util/constants");
const { Moonreply } = require ("../../models/index");

module.exports.run = async (client, message, args) => {
    if(message.author.id !== "216253896744632321") return; //Si c'est pas Gaby #6272 qui exécute ce bot, rien ne se passe.
    const newMoonreply = {
        reply: args.slice(0).join(" "),
    }
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, newMoonreply);
    const createMoonReply = await new Moonreply(merged);
    createMoonReply.save().then(r => console.log(`Nouvelle réponse au mot 'Lune' ! -> ${r.reply}`));
};

module.exports.help = MESSAGES.COMMANDS.SADMIN.MOONREPLY;