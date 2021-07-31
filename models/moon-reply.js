const mongoose = require("mongoose");

const moonReplySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reply: {
        "type": String,
        "default": "Je hais les lunariens.",
    },
});

module.exports = mongoose.model("Moonreply", moonReplySchema);