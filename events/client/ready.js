module.exports = client => {
    client.user.setPresence({activity: {name: 'j!help'}, type: 'PLAYING'});
    console.log(`Logged in as ${client.user.tag}!`);
}