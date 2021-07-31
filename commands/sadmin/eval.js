const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    function clean(text) {
        if(typeof text === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }

    if(message.author.id !== "216253896744632321") return; //Si c'est pas Gaby #6272 qui exécute ce bot, rien ne se passe.
    const code = args.join(" ");
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    message.channel.send(cleanCode, {code: "js"});
}

module.exports.help = MESSAGES.COMMANDS.SADMIN.EVAL;