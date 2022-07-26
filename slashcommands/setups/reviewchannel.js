const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter, channel) => {

    const noPermissions = new Discord.MessageEmbed()
        .setTitle(`Geen toegang!`)
        .setDescription(`Je hebt niet de juiste permissies om dit command te kunnen gebuiken. Je hebt de permissie **ADMINISTRATOR** nodig om dit command te kunnen gebruiken.`)
        .setColor(client.ui.color)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    if (!inter.member.permissions.has("ADMINISTRATOR")) return inter.reply({ embeds: [noPermissions], ephemeral: true })

    const reviewChannel = inter.options.getChannel('kanaal');

    db.set(`review_${inter.guild.id}`, reviewChannel.id)

    const succesEmbed = new Discord.MessageEmbed()
        .setTitle("Succes")
        .setColor("GREEN")
        .setDescription(`Het kanaal ${reviewChannel} is succesvol ingesteld voor de reviews!`)
        .setTimestamp()
        .setFooter("Dark Town RP | ©️ 2022")

    const review = new Discord.MessageEmbed()
        .setTitle("Review achterlaten")
        .setColor(`${client.ui.color}`)
        .setDescription("Wilt u uw review hier achterlaten? Maak dan gebruik van de command \`/review\`\n**Let erop!** Onnodige reviews worden verwijderd!")
        .setFooter("Dark Town RP | ©️ 2022")

    const channell = inter.guild.channels.cache.find(x => x.id === db.get(`review_${inter.guild.id}`))
    channell.send({ embeds: [review] })
    inter.reply({ embeds: [succesEmbed], ephemeral: true });

}

module.exports.help = {
    name: 'setup-review'
}