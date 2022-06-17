A "feature" within WOKCommands is a normal feature within your bot. This could be a "reaction roles" system, or a "welcome message" system. A feature could include multiple event listeners and other logic to handle how your bot works. WOKCommands makes it easy to register features by adding them to a features folder. The folder name can be specified when initializing WOKCommands like so:
```
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    // The name of the local folder for your feature files
    featuresDir: path.join(__dirname, 'features')
  })
})

client.login('YOUR TOKEN HERE')
```