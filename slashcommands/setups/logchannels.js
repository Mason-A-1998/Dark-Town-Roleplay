const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter, channel) => {

    const noPermissions = new Discord.MessageEmbed()
        .setTitle(`Geen toegang!`)
        .setDescription(`Je hebt niet de juiste permissies om dit command te kunnen gebuiken. Je hebt de permissie **ADMINISTRATOR** nodig om dit command te kunnen gebruiken.`)
        .setColor(client.ui.color)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    if (!inter.member.permissions.has("MANAGE_WEBHOOKS")) return inter.reply({ embeds: [noPermissions], ephemeral: true })

    const kickChannel = inter.options.getChannel('kick-logs');
    const banChannel = inter.options.getChannel('ban-logs');
    const timeoutChannel = inter.options.getChannel('timeout-logs');

    db.set(`kicklogs_${inter.guild.id}`, kickChannel.id)
    db.set(`banlogs_${inter.guild.id}`, banChannel.id)
    db.set(`timeoutlogs_${inter.guild.id}`, timeoutChannel.id)

    const succesEmbed = new Discord.MessageEmbed()
        .setTitle("Succes")
        .setColor("GREEN")
        .setDescription(`Het kanaal ${kickChannel} is succesvol ingesteld voor de kick logs!\nHet kanaal ${banChannel} is succesvol ingesteld voor de ban logs!\nHet kanaal ${timeoutChannel} is succesvol ingesteld voor de timeout logs!`)
        .setTimestamp()
        .setFooter("RG Moderation | ©️ 2022")

        const kicklog = new Discord.MessageEmbed()
        .setTitle("Kick logs")
        .setColor(`${client.ui.color}`)
        .setDescription("In dit kanaal worden alle kicks verstuurd!\n\n**Let erop!** Zorg ervoor dat leden dit kanaal niet kunnen zien.")
        .setFooter("RG Moderation | ©️ 2022")

    const kicks = inter.guild.channels.cache.find(x => x.id === db.get(`kicklogs_${inter.guild.id}`))
    kicks.send({ embeds: [kicklog] })

    const banlog = new Discord.MessageEmbed()
        .setTitle("Ban logs")
        .setColor(`${client.ui.color}`)
        .setDescription("In dit kanaal worden alle verbanningen verstuurd!\n\n**Let erop!** Zorg ervoor dat leden dit kanaal niet kunnen zien.")
        .setFooter("RG Moderation | ©️ 2022")

    const bans = inter.guild.channels.cache.find(x => x.id === db.get(`banlogs_${inter.guild.id}`))
    bans.send({ embeds: [banlog] })

    const clearlog = new Discord.MessageEmbed()
        .setTitle("Clear logs")
        .setColor(`${client.ui.color}`)
        .setDescription("In dit kanaal worden alle clear logs verstuurd!\n\n**Let erop!** Zorg ervoor dat leden dit kanaal niet kunnen zien.")
        .setFooter("RG Moderation | ©️ 2022")

    const clear = inter.guild.channels.cache.find(x => x.id === db.get(`clearlogs_${inter.guild.id}`))
    clear.send({ embeds: [clearlog] })

    const timeoutlog = new Discord.MessageEmbed()
        .setTitle("Timeout logs")
        .setColor(`${client.ui.color}`)
        .setDescription("In dit kanaal worden alle timeout logs verstuurd!\n\n**Let erop!** Zorg ervoor dat leden dit kanaal niet kunnen zien.")
        .setFooter("RG Moderation | ©️ 2022")

    const timeout = inter.guild.channels.cache.find(x => x.id === db.get(`timeoutlogs_${inter.guild.id}`))
    timeout.send({ embeds: [timeoutlog] })

    inter.reply({ embeds: [succesEmbed], ephemeral: true }).catch(async () => {
        await inter.channel.send("Er is een fout opgetreden! Alle logkanalen zijn wel ingesteld!")
    });

}

module.exports.help = {
    name: 'setup-logs'
}