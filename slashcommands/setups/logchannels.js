const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter, channel) => {

    const noPermissions = new Discord.MessageEmbed()
        .setTitle(`Geen toegang!`)
        .setDescription(`Je hebt niet de juiste permissies om dit command te kunnen gebuiken. Je hebt de permissie **MANAGE_WEBHOOKS** nodig om dit command te kunnen gebruiken.`)
        .setColor(client.ui.color)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    if (!inter.member.permissions.has("MANAGE_WEBHOOKS")) return inter.reply({ embeds: [noPermissions], ephemeral: true })

    const timeoutChannel = inter.options.getChannel('timeout-logs');

    db.set(`timeoutlogs_${inter.guild.id}`, timeoutChannel.id)

    const succesEmbed = new Discord.MessageEmbed()
        .setTitle("Succes")
        .setColor(`${client.ui.color}`)
        .setDescription(`Het kanaal ${timeoutChannel} is succesvol ingesteld voor de timeout logs!`)
        .setTimestamp()
        .setFooter("Dark Town RP | ©️ 2022")

    const timeoutlog = new Discord.MessageEmbed()
        .setTitle("Timeout logs")
        .setColor(`${client.ui.color}`)
        .setDescription("In dit kanaal worden alle timeout logs verstuurd!\n\n**Let erop!** Zorg ervoor dat leden dit kanaal niet kunnen zien.")
        .setFooter("Dark Town RP | ©️ 2022")

    const timeout = inter.guild.channels.cache.find(x => x.id === db.get(`timeoutlogs_${inter.guild.id}`))
    timeout.send({ embeds: [timeoutlog] })

    inter.reply({ embeds: [succesEmbed], ephemeral: true }).catch(async () => {
        await inter.channel.send("Er is een fout opgetreden! Alle logkanalen zijn wel ingesteld!")
    });

}

module.exports.help = {
    name: 'setup-logs'
}