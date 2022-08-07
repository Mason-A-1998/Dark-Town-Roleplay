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

    const bugChannel = inter.options.getChannel('kanaal');

    db.set(`bug_${inter.guild.id}`, bugChannel.id)

    const succesEmbed = new Discord.MessageEmbed()
        .setTitle("Succes")
        .setColor("GREEN")
        .setDescription(`Het kanaal ${bugChannel} is succesvol ingesteld voor de bugs!`)
        .setTimestamp()
        .setFooter("Dark Town RP | ©️ 2022")

    const bug = new Discord.MessageEmbed()
        .setTitle("Bugs")
        .setColor(`${client.ui.color}`)
        .setDescription("Wilt u een bug melden? Maak dan gebruik van de command \`/bug\`\n**Let erop!** Onnodige bugs worden verwijderd!")
        .setFooter("Dark Town RP | ©️ 2022")

    const channell = inter.guild.channels.cache.find(x => x.id === db.get(`bug_${inter.guild.id}`))
    channell.send({ embeds: [bug] })
    inter.reply({ embeds: [succesEmbed], ephemeral: true });

}

module.exports.help = {
    name: 'setup-bugs'
}