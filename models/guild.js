const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String, 
    guildName: String,
    prefix: {
        "type": String,
        "default": defaults.prefix
    },
    logChannel: {
        "type": String,
        "default": defaults.logChannel
    },
    welcomeChannel: {
        "type": String,
        "default": defaults.welcomeChannel
    },
    goodbyeChannel: {
        "type": String,
        "default": defaults.goodbyeChannel
    },
    moonReplyEnabled: {
        "type": Boolean,
        "default": defaults.moonReplyEnabled
    },
    diReplyEnabled: {
        "type": Boolean,
        "default": defaults.diReplyEnabled
    },
    pressFReplyEnabled: {
        "type": Boolean,
        "default": defaults.pressFReplyEnabled
    },
    pingReplyEnabled: {
        "type": Boolean,
        "default": defaults.pingReplyEnabled
    },
    joinMessageEnabled: {
        "type": Boolean,
        "default": defaults.joinMessageEnabled
    },
    leaveMessageEnabled: {
        "type": Boolean,
        "default": defaults.leaveMessageEnabled
    },
});

module.exports = mongoose.model("Guild", guildSchema);