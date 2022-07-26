const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {

    const noPermissions = new Discord.MessageEmbed()
        .setTitle(`Geen toegang!`)
        .setDescription(`Je hebt niet de juiste permissies om dit command te kunnen gebuiken. Je hebt de permissie **BAN_MEMBERS** nodig om dit command te kunnen gebruiken.`)
        .setColor(client.ui.color)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    if (!inter.member.permissions.has("BAN_MEMBERS")) return inter.reply({ embeds: [noPermissions], ephemeral: true })

    const channel = inter.options.getChannel('kanaal');
    let bericht = inter.options.getString(`bericht`)

    inter.reply({ content: 'Je bericht is succesvol verzonden!', ephemeral: true })
    channel.send(`${bericht}`)

}


module.exports.help = {
    name: 'say'
}