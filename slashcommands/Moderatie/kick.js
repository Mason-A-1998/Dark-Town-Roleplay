const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {

    const noPermissions = new Discord.MessageEmbed()
        .setTitle(`Geen toegang!`)
        .setDescription(`Je hebt niet de juiste permissies om dit command te kunnen gebuiken. Je hebt de permissie **KICK_MEMBERS** nodig om dit command te kunnen gebruiken.`)
        .setColor(client.ui.color)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    if (!inter.member.permissions.has("KICK_MEMBERS")) return inter.reply({ embeds: [noPermissions], ephemeral: true })

    if (db.get(`kicklogs_${inter.guild.id}`) === null) {
        return inter.reply("Het log systeem is nog niet ingesteld! Wil je deze instellen? doe dan \`/setup-logs\` ")
    }

    let kickUser = inter.options.getUser("persoon")

    let findMember = inter.guild.members.cache.get(kickUser.id)
    let reason = inter.options.getString("reden")
    if (reason === null) reason = `Niet opgegeven!`

    let kicked = new Discord.MessageEmbed()
        .setTitle(`Persoon gekickt!`)
        .setColor(`${client.ui.color}`)
        .setDescription(`${kickUser} Is succesvol gekickt.`)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    let log = new Discord.MessageEmbed()
        .setTitle(`Gekickt`)
        .setColor(`${client.ui.color}`)
        .addField(`Gebruiker`, `${kickUser}`)
        .addField(`Staff`, `${inter.user}`)
        .addField(`Reden`, `${reason}`)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    let dmlog = new Discord.MessageEmbed()
        .setTitle(`Gekickt`)
        .setColor(`${client.ui.color}`)
        .addField(`Server`, `${inter.guild.name}`)
        .addField(`Staff`, `${inter.user}`)
        .addField(`Reden`, `${reason}`)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    await kickUser.send({ embeds: [dmlog] }).catch(async () => {
        await inter.channel.send(`\`${kickUser.username}\` Heeft zijn/haar privé berichten uitstaan, en heeft dus geen bericht ontvangen.`)
    })

    const channel = inter.guild.channels.cache.find(x => x.id === db.get(`kicklogs_${inter.guild.id}`))
    if (!channel) return inter.reply("Het log systeem is nog niet ingesteld! Wil je deze instellen? doe dan \`/setup-trainingen\`")
    channel.send({ embeds: [log] })
    inter.reply({ embeds: [kicked], ephemeral: true })

    findMember.kick({ reason: reason })

}


module.exports.help = {
    name: 'kick'
}