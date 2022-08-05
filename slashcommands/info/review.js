const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {

    const error = new Discord.MessageEmbed()
        .setDescription(`Je kan ons maximaal 5 sterren geven!`)
        .setColor("RED")

    const eenster = new Discord.MessageEmbed()
        .setDescription(`Je moet ons minimaal 1 ster geven!`)
        .setColor("RED")

    const sterren = inter.options.getNumber('aantal-sterren');
    if (sterren > 5) { return inter.reply({ embeds: [error], ephemeral: true }) }
    if (sterren < 1) { return inter.reply({ embeds: [eenster], ephemeral: true }) }

    const review = inter.options.getString('jouw-review');

    const embed = new Discord.MessageEmbed()
        .setDescription(`Wil jij ook een review aanmaken gebruik: \`/review\`!`)
        .setAuthor(`| ${inter.user.username}`, inter.user.displayAvatarURL({ dynamic: true }))
        .addField(`Ingestuurd door:`, `${inter.user}`, true)
        .setColor("GOLD")

    if (sterren === 1) { embed.addField(`Sterren:`, '⭐', true) }
    if (sterren === 2) { embed.addField(`Sterren:`, '⭐⭐', true) }
    if (sterren === 3) { embed.addField(`Sterren:`, '⭐⭐⭐', true) }
    if (sterren === 4) { embed.addField(`Sterren:`, '⭐⭐⭐⭐', true) }
    if (sterren === 5) { embed.addField(`Sterren:`, '⭐⭐⭐⭐⭐', true) }

    embed.addField(`Review:`, review)
        .setFooter({ text: `${client.ui.footer}` })
    const channel = inter.guild.channels.cache.find(x => x.id === db.get(`review_${inter.guild.id}`))
    channel.send({ embeds: [embed] }).then(async (msg) => {

        await msg.react("❤️");
    }).catch(err => {
        return;
    });

    const replied = new Discord.MessageEmbed()
        .setTitle("Succes")
        .setColor("GREEN")
        .setDescription(`Je review is succesvol verstuurd naar ${channel}!`)

    await inter.reply({ embeds: [replied], ephemeral: true })
}


module.exports.help = {
    name: 'review'
}