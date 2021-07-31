require("dotenv").config();

module.exports = {
    TOKEN: process.env.TOKEN, //my bot token
    DBCONNECTION: process.env.DBCONNECTION, //my connection url to mongodb: mongodb+srv://<user>:<password>@cluster0.adlak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    DEFAULTSETTINGS: {
        prefix: "j!",
        logChannel: "bot-logs",
        welcomeChannel: "welcome",
        goodbyeChannel: "goodbye",
        moonReplyEnabled: true,
        diReplyEnabled: true,
        pressFReplyEnabled: true,
        pingReplyEnabled: true,
        joinMessageEnabled: true,
        leaveMessageEnabled: true,
    }
}