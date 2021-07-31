# Junko Discord Bot

This is a simple bot with a bit of Junko (Touhou)'s personality. It only reacts in french for french messages for now. But maybe i will improve it later.

## It has 6 functions:

- **Welcome** a new user in the server.
- Say **goodbye** to someone who quits the server.
- React with an **F** to people who say _press F_.
- Repeat everything after **di** if a message contains _di_. (yeah, it's a french bot)
- Reply to people who **ping** everyone or mention Junko, _if they don't have to_.

#### _...and more importantly_: 

- Reply with _anger_ to people who talk about the **moon**.

## Its default prefix is _j!_ and it has 4 commands:

> Note: The prefix can be changed from one server to another. You have to type the command with **the prefix from your server** to run it correctly. 
> **help** is an exception, as it is always possible to run it from typing **j!help** even if your server has an other prefix.

### help
```sh
j!help
```
This is the default command of Junko, it works everytime with the j! prefix (even if the prefix has been changed on your server). This command line appears in Junko's status.

It displays every command available in your server, with the command line. If you are curious about one command, you can type its name after the help command like shown below:
```sh
j!help <command_name>
```


### ping
```sh
j!ping
```
It reacts by sending 'Pong!' in the same channel.

### embed
```sh
j!embed
```
It reacts by sending a generic embed. The title has a link to a [Pure Furies - Whereabouts of the Heart](https://www.youtube.com/watch?v=_dakr4zPgPg) remix by the author of this bot.

### config
```sh
j!config
```
This is a command made for administrators. It requires the '_Administrator_' permission to work correctly.
It can work with and without arguments.

If you type j!config without arguments, it will display the ⑨ configuration **sub commands**:
- **prefix**: to see or change your server's prefix.
```sh
j!config prefix <new_prefix (optional)>
```

- **welcomechannel**: to configure your welcoming channel. By default, this channel is not configured, and Junko has nowhere to post welcoming messages.
```sh
j!config welcomechannel <mentioned_channel (optional)>
```

- **goodbyechannel**: same as the welcoming channel, but to post goodbye messages when someone leaves the server. By default, this channel is not configured, and Junko has nowhere to post goodbye messages.
```sh
j!config goodbyechannel <mentioned_channel (optional)>
```

- **welcome**: to enable / disable welcoming messages in your welcoming channel (if configured).
```sh
j!config welcome <on/off (optional)>
```

- **goodbye**: same as _welcome_, but with goodbye messages.
```sh
j!config welcome <on/off (optional)>
```

- **moonreply**: to enable / disable replies to messages which contain the word _Lune_. (Again, this is a french bot)
```sh
j!config moonreply <on/off (optional)>
```

- **pressFreply**: to enable / disable **F** reactions to messages which contain _press F_.
```sh
j!config pressFreply <on/off (optional)>
```

- **direply**: to enable / disable replies to messages that contain '_di_'.
```sh
j!config direply <on/off (optional)>
```

- **pingreply**: to enable / disable replies to messages that mention @here, @everyone, or Junko.
```sh
j!config pingreply <on/off (optional)>
```

# Installation

To run this bot correctly, there are 3 steps:

## 1 - Create your bot in [discord developer portal](https://discord.com/developers/applications)

- Name it in the _General information_ panel.
- Click 'Add Bot' in the _Bot_ panel, you will have access to some interesting information, like your **TOKEN**.
- Remember (copy) the **TOKEN** and save it on a .env file on your PC, then check the 'Presence intent' and 'Server members intent' boxes in the _Bot_ panel.
- In the _OAuth2_ panel, check the 'bot' box, then check 'Administrator' permission. 
- Copy the link (https://discord.com/api/oauth2/authorize?client_id=your_bot_id&permissions=8&scope=bot) and paste it into a browser to invite your bot on your server.

Your bot is on your server, but it is disconnected. Don't worry, this is normal.

## 2 - Initiate your MongoDB database

#### _Option 1: locally_

- Download and install the latest stable version of [MongoDB Compass](https://www.mongodb.com/try/download/compass). Just follow the default installation.
- Run MongoDB Compass, you will normally have a _New connection_ panel with an empty URL field. Type 'mongodb://localhost:27017/junko' in it, then click 'Connect'.

#### _Option 2: on the cloud_

- Create your free MongoDB account, then create a project. 
- On your project, create a free shared cluster. The provisioning can take several minutes.
- Once it's created, click on the 'Connect' button. This will show a configuration panel with 2 steps.
- First, add an IP address. You can click the 'Allow Access from Anywhere' to set the IP address to '0.0.0.0/0', it doesn't matter.
- Then, create a database user. Choose your username (usually _gcknroot_) and your password. **Remember them**, you will need it later.
- Move into the next panel by clicking 'Choose a connection method', then choose 'Connect your application'.
- Select the Node.js driver (version 3.7 or later) and copy the link into the same file as the bot **TOKEN**. Replace the <password> field with your actual cluster password.
  
## 3 - Download the repository and put it on your PC
  
- Install npm if you haven't already done it.  
- Put the .env file with your **TOKEN** and your cluster link into the root of the repository, next to the _config.js_ file.
- Your .env file must be named ".env" and it should have 2 lines of code representing the TOKEN and DBCONNECTION variables. Don't use other variable names, because they are used in the config.js file.
```sh
TOKEN=your_bot_token
DBCONNECTION=your_link_to_mongodb
```
- Open a terminal at the root of your repository, and run "npm install". It should install all your dependencies (mongoose, dotenv and discord.js) or update them.
- Run "npm start". It should print some logs as "Mongoose connected successfully" and "Connected as <your_bot_name>". If so, congrats, your bot is successfully installed.
  
  
Your bot should now be connected and responding to commands such as _j!help_. If not, contact _Gaby #6272_ (the creator's Discord nickname) or join the [support server](https://discord.gg/sYsyfvDT3u). You may be surprised by the french language, but i can help you in english if you want.
