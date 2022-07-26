const Discord = require('discord.js');
const client = require("../index").client
const { Permissions } = require('discord.js')
const db = require('quick.db');


client.on('interactionCreate', async (inter) => {
    if(inter.isCommand()){
        let slashCmds = client.SlashCmds.get(inter.commandName)
        if(slashCmds) slashCmds.run(client, inter)
    }

})