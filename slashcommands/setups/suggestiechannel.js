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

    const suggestieChannel = inter.options.getChannel('kanaal');

    db.set(`suggest_${inter.guild.id}`, suggestieChannel.id)

    const succesEmbed = new Discord.MessageEmbed()
        .setTitle("Succes")
        .setColor("GREEN")
        .setDescription(`Het kanaal ${suggestieChannel} is succesvol ingesteld voor de suggesties!`)
        .setTimestamp()
        .setFooter("Dark Town RP | ©️ 2022")

    const suggestie = new Discord.MessageEmbed()
        .setTitle("Suggesties")
        .setColor(`${client.ui.color}`)
        .setDescription("Wilt u een suggestie indienen? Maak dan gebruik van de command \`/suggestie\`\n**Let erop!** Onnodige suggesties worden verwijderd!")
        .setFooter("Dark Town RP | ©️ 2022")

    const channell = inter.guild.channels.cache.find(x => x.id === db.get(`suggest_${inter.guild.id}`))
    channell.send({ embeds: [suggestie] })
    inter.reply({ embeds: [succesEmbed], ephemeral: true });

}

module.exports.help = {
    name: 'setup-suggestie'
}