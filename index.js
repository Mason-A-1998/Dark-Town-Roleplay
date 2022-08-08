const { Client, Intents, DiscordAPIError, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const discord = require('discord.js');
const client = new Intents .Client({ 
    intents: [
       Discord.GatewayIntentBits.GuildInvites, 
       Discord.GatewayIntentBits.Guilds, 
       Discord.GatewayIntentBits.GuildMembers,
       Discord.GatewayIntentBits.GuildMessages,
       Discord.GatewayIntentBits.GuildMessageReactions,
       Discord.GatewayIntentBits.GuildVoiceStates,
       Discord.GatewayIntentBits.GuildEmojisAndStickers
    ], 
       allowedMentions: { parse: ['users', 'roles'] }
    
});
const fs = require('fs');
const yaml = require('js-yaml')
const { Permissions } = require('discord.js')
function loadFile(file) { return myFile = yaml.load(fs.readFileSync(`${file}`, 'utf8')) }



client.config = loadFile(`./configs/config.yml`)
client.ui = loadFile(`./configs/ui.yml`)

client.connection = false;
client.functions = new Discord.Collection();
client.dropdowns = new Discord.Collection();
client.buttons = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
client.embeds = new Discord.Collection();
client.SlashCmds = new Discord.Collection();

module.exports.client = client

fs.readdirSync(`./events/`).forEach(dir => {
    var jsFiles = fs.readdirSync('./events/').filter(f => f.split(".").pop() === "js");
    client.config.eventsCount = client.config.eventsCount + 1
    jsFiles.forEach(event => {
        const eventGet = require(`./events/${event}`)
        try { client.events.set(eventGet.name, eventGet) } catch (err) { return console.log(err) }
    })
})

fs.readdirSync('./slashcommands/').forEach(dir => {
    fs.readdir(`./slashcommands/${dir}`, (err, files) => {
        if (err) throw err;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        jsFiles.forEach(file => {
            var fileGet = require(`./slashcommands/${dir}/${file}`);
            console.log(`🔨 [LOADED] | Slashcommand succesvol geladen command (${file})`)
            client.config.commandsCount = client.config.commandsCount + 1
            try { client.SlashCmds.set(fileGet.help.name, fileGet); } catch (err) { console.log(err) }
        });
    });
});

const { createCmd } = require('./events/dataHandler');
client.on('ready', async () => {
    let guilds = client.guilds.cache.size;
    let users = client.users.cache.size
    console.log(`🔑 [STARTED] | ${client.user.username} loaded!`)
    let statuses = [`Met [DTR] Bots`, `Dark Town Roleplay`]
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "PLAYING" });
    }, 10000)
    createCmd(client)
});



client.login(process.env.DTR);