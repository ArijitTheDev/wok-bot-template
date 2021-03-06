***You can create directories for easy use or add files direcrly, if you're using legacy based commands then you have to mention the categories in the index.js files. For slash based only it is not mandatory.***

#Command Template:
```
module.exports = {
    // The primary name of the command.
    // If omitted the name of the file will take it's place.
    name: 'ping',
    
    // Alternative aliases, can be a string or an array of strings.
    // Alternative property names are "commands" or "names".
    aliases: ['p'],
    
    // The name and description of the category for the command.
    // Used in the built-in help menu.
    category: 'Testing',
    description: 'Replies with "Pong!"',
    
    // The correct arguments to use for this command.
    // Displayed when the number of arguments is incorrect
    // from "minArgs" and "maxArgs".
    // Typically required arguments should be surrounded with < and >
    // and optional arguments should be surrounded with [ and ].
    // For slash commands this string should be lower case and one word
    expectedArgs: '',
    
    // The minimum and maximum amount of arguments.
    // Tells WOKCommands when to send the correct usage of this command.
    // Setting maxArgs to -1 (the default) will allow any number of arguments.
    minArgs: 0,
    maxArgs: 0,
    
    // The full syntax error, customizable per command.
    // You can use "{PREFIX}" in this string to specify the current prefix
    // for the guild where the command was sent.
    // You can use "{ARGUMENTS}" in this string to specify the correct arguments.
    syntaxError: {
        'english': 'Incorrect syntax! Use `{PREFIX}`ping {ARGUMENTS}'
    },
    
    // What Discord permissions the user needs to run the command.
    // Note that invalid permissions will throw an error to prevent typos.
    permissions: ['ADMINISTRATOR'],
    
    // How long the user needs to wait before using this command again.
    // This string is in the "{DURATION}{DURATION TYPE}" format with the following:
    // s = seconds, m = minutes, h = hours, and d = days.
    // For cooldowns 5 minutes or more it is highly encouraged to provide a
    // database connection URI to WOKCommands (see the "databases" section)
    // as those cooldowns will be stored in that database. This is to protect
    // you if the bot were to restart and lose all in-memory countdown data.
    // Global cooldowns are a per-guild system and require a minimum duration of
    // 1 minute to use. This property uses the same format as per-user cooldowns.
    cooldown: '60s',
    globalCooldown: '10m',
    
    // Hides this command from the built-in help menu. Admins bypass this.
    hidden: false,
    
    // Forces this command to only be runnable from whitelisted user IDs.
    // You can define these IDs in the "options" object passed to the constructor.
    // For more information see the "Options object" page of the documentation.
    ownerOnly: false,
    
    // Forces this command to only be runnable from whitelisted guild IDs.
    // You can define these IDs in the "options" object passed to the constructor.
    // For more information see the "Options object" page of the documentation.
    testOnly: false,
    
    // Forces this command to only be ran in guilds rather than DMs and guilds.
    guildOnly: false,
    
    // Sets this command as a slash command.
    // Can be the string 'both' as well for legacy and slash command support.
    slash: false,
    
    // What options are used for slash commands
    options: [],
    
    // Invoked whenever an error occurs within one of your commands.
    error: ({
        error,   // A specific string for what type of command occurred. See https://docs.wornoffkeys.com/commands/handling-command-errors
        command, // The name of the command that had an error
        message, // The Discord.JS message object
        info     // Additional information if needed
    }) => {},
    
    // The function that is invoked whenever the command is ran by a user.
    // An object is passed in as an argument that provides additional data.
    // You can destructure any properties you need like so:
    callback: ({
        guild,      // The guild where the command was sent
        member,     // The member who ran the command
        user,       // The user who ran the command
        message,    // The DJS message object
        channel,    // The DJS channel object
        args,       // An array of arguments without the command prefix/name
        text,       // A joined string of the above arguments
        client,     // Your bot's client object
        prefix,     // The prefix used to run this command
        instance,   // Your WOKCommands instance
        interaction // The interaction for slash commands
    }) => {}
}
  
}
```

For more refer to [Documentation](https://docs.wornoffkeys.com/)
