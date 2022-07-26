const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {

    let suggestie = inter.options.getString(`suggestie`)
    if (!suggestie) suggestie = `Niet opgegeven`

    if (db.get(`suggest_${inter.guild.id}`) === null){
        return inter.reply("Dit systeem is nog niet goed ingesteld! Zorg ervoor dat het suggestie kanaal is ingesteld via **/setup-suggestie**")
    }

    let warned = new Discord.MessageEmbed()
        .setColor(`${client.ui.color}`)
        .setDescription(`Je suggestie is succesvol verzonden naar het desbetreffende kanaal!`)
        .setFooter({ text: `${client.ui.footer}` })
        .setTimestamp()

    let suggest = new Discord.MessageEmbed()
        .setTitle(`Suggestie van ${inter.user.username}`)
        .setDescription(suggestie)
        .setColor(`${client.ui.color}`)
        .setTimestamp()
        .setFooter({ text: `${client.ui.footer}` })

    const channel = inter.guild.channels.cache.find(x => x.id === db.get(`suggest_${inter.guild.id}`))
    channel.send({ embeds: [suggest] }).then(async (msg) => {

        await msg.react("✅");
        await msg.react("❌");
    }).catch(err => {
        console.log(err);
    });
    inter.reply({ embeds: [warned], ephemeral: true })

}


module.exports.help = {
    name: 'suggestie'
}