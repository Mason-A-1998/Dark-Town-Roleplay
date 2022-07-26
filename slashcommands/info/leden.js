const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {
    
        const leden = new Discord.MessageEmbed()
        .setColor(`${client.ui.color}`)
        .setDescription(`De server telt nu **${inter.guild.memberCount}** Leden.`)

    return inter.reply({ embeds: [leden] })
    
}


module.exports.help = {
    name: 'leden'
}