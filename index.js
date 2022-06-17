const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const { Collection, Intents } = DiscordJS
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
  const dbOptions = {
    keepAlive: true
  }
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    // What guilds your slash commands will be created in
    testServers: [' '],
    botOwners: [' '],
    mongoUri: 'mongo connection url goes here',
    disabledDefaultCommands: [
            // 'help',
            // 'command',
            // 'language',
            //'prefix',
            // 'requiredrole',
            // 'channelonly'
        ],

  })
  .setDefaultPrefix('') // by default it is !
  .setCategorySettings([
    // create categories and add them to your bot's command file as category: 'name' for automatic dynamic help command creation
    {
      name: 'Moderation',
      emoji: '⚒️'
    },
    {
      name: 'Utility',
      emoji: '🧩'
    }
  ])
})

client.login('TOKEN GOES HERE')
