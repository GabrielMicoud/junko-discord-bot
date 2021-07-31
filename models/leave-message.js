const mongoose = require("mongoose");

const leaveMessageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reply: {
        "type": String,
        "default": "",
    },
});

module.exports = mongoose.model("Leavemessage", leaveMessageSchema);