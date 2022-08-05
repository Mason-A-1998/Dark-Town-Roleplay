const Discord = require('discord.js');
const moment = require("moment");
const { version, MessageEmbed } = require("discord.js");
const os = require("os");
const { uptime } = require('process');
moment.locale("nl");

module.exports.run = async (client, inter) => {

    return inter.reply("Soon :eyes:")

    // let duration = moment.duration(client.uptime).format("D [dagen], H [uur], m [min], s [sec]");

    // let embed = new MessageEmbed()
    //     .setTitle(client.user.username)
    //     .setColor(`${client.ui.color}`)
    //     .setThumbnail(client.user.displayAvatarURL({ size: 4096 }))
    //     .addField("ID:", client.user.id, true)
    //     .addField("Discord.js:", `v${version}`, true)
    //     .addField("Node:", `${process.version}`, true)
    //     .addField("Platform:", `${os.platform}`, true)
    //     .addField("Uptime:", `${duration}`, true)
    //     .addField("Aantal servers:", `${client.guilds.cache.size}`, true)
    //     .setFooter({ text: `${client.ui.footer}` })
    //     .setTimestamp()

    // inter.reply({ embeds: [embed] })
}


module.exports.help = {
    name: 'botinfo'
}