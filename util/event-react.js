const mongoose = require("mongoose");
const { Moonreply } = require("../models/index");

const pressF = (client, message) => {
    message.react('🇫');
}

const moon = async (client, message) => {
    const replies = await Moonreply.find();
    if(!replies) return;
    const index = Math.floor(Math.random() * replies.length);
    const reply = replies[index].reply;
    message.reply(reply);
}

const di = (client, message) => {
    const toRepeat = message.content.split(/dis|Dis|dIs|DIs|diT|DiT|dIT|DIT|diS|DiS|dIS|DIS|di|Di|dI|DI/).slice(1).join("di");
    message.reply("..." + toRepeat + "\n\nhehe");
}

const pingreply = (client, message) => {
    message.reply("**Si tu me ping encore une fois, je te jure que je te ferai fondre plus vite qu'un Mr Freeze dans un réacteur nucléaire.**");
}

module.exports = {
    pressF,
    moon,
    di,
    pingreply,
}