const Discord = require('discord.js');
const db = require("quick.db")
const ms = require("ms");
const { Permissions } = require('discord.js')


module.exports.run = async (client, inter) => {

    const noPermissions = new Discord.MessageEmbed()
        .setTitle(`Geen toegang!`)
        .setDescription(`Je hebt niet de juiste permissies om dit command te kunnen gebuiken. Je hebt de permissie **KICK_MEMBERS** nodig om dit command te kunnen gebruiken.`)
        .setColor(client.ui.color)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    if (!inter.member.permissions.has("KICK_MEMBERS")) return inter.reply({ embeds: [noPermissions], ephemeral: true })

    if (db.get(`timeoutlogs_${inter.guild.id}`) === null) {
        return inter.reply("Het log systeem is nog niet ingesteld! Wil je deze instellen? doe dan \`/setup-logs\` ")
    }

    const user = inter.options.getMentionable('persoon')
    const length = inter.options.getString('tijd')
    const reason = inter.options.getString('reden')
    const member = inter.guild.members.cache.get(user.id)

    const timeInMs = ms(length);
    if (!timeInMs) {
        return inter.reply("Geef een geldige tijd op!");
    }

    const perms = new Discord.MessageEmbed()
        .setDescription(`Je kan geen staff leden timeouten.`)
        .setColor("RED")
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    if (user.permissions.has("KICK_MEMBERS")) return inter.reply({ embeds: [perms], ephemeral: true })

    member.timeout(timeInMs, reason);

    const timeout = new Discord.MessageEmbed()
        .setTitle(`Timeout!`)
        .setDescription(`\`${user.user.tag}\` Heeft een timeout gekregen.`)
        .setColor(client.ui.color)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    let log = new Discord.MessageEmbed()
        .setTitle(`Timeout Gegeven`)
        .addField(`Gebruiker`, `${user}`)
        .addField(`Medewerker`, `${inter.user}`)
        .addField(`Tijd`, `${length}`)
        .addField(`Reden`, `${reason}`)
        .setColor(`${client.ui.color}`)
        .setTimestamp()
        .setFooter({ text: `${client.ui.footer}` })

    let dmlog = new Discord.MessageEmbed()
        .setTitle(`Timeout`)
        .setColor(`${client.ui.color}`)
        .addField(`Server`, `${inter.guild.name}`)
        .addField(`Medewerker`, `${inter.user}`)
        .addField(`Tijd`, `${length}`)
        .addField(`Reden`, `${reason}`)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    await user.send({ embeds: [dmlog] }).catch(async () => {
        await inter.channel.send(`\`${user.username}\` Heeft zijn/haar privé berichten uitstaan, en heeft dus geen bericht ontvangen.`)
    })

    const channel = inter.guild.channels.cache.find(x => x.id === db.get(`timeoutlogs_${inter.guild.id}`))
    if (!channel) return inter.reply("Het log systeem is nog niet ingesteld! Wil je deze instellen? doe dan \`/setup-trainingen\`")
    channel.send({ embeds: [log] })
    inter.reply({ embeds: [timeout], ephemeral: true })

}


module.exports.help = {
    name: 'timeout'
}