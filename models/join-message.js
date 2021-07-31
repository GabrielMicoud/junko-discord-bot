const mongoose = require("mongoose");

const joinMessageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reply: {
        "type": String,
        "default": "",
    },
});

module.exports = mongoose.model("Joinmessage", joinMessageSchema);