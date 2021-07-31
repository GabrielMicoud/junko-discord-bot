# Junko Discord Bot

This is a simple bot with a bit of Junko's personality. It only reacts in french for french messages for now. But maybe i will improve it later.

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