const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {

    let bug = inter.options.getString(`bug`)
    if (!bug) bug = `Niet opgegeven`

    let goed = new Discord.MessageEmbed()
        .setColor(`${client.ui.color}`)
        .setDescription(`Je bug is succesvol verzonden naar het desbetreffende kanaal!`)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    let bugs = new Discord.MessageEmbed()
        .setTitle(`Bug van ${inter.user.username}`)
        .setDescription(bug)
        .setColor(`${client.ui.color}`)
        .setTimestamp()
        .setFooter({ text: `${client.ui.footer}` })

        const channel = inter.guild.channels.cache.find(x => x.id === db.get(`bug_${inter.guild.id}`))
        if (channel === undefined) return
        channel.send({ embeds: [bugs] })
        inter.reply({ embeds: [goed], ephemeral: true })

}


module.exports.help = {
    name: 'bug'
}