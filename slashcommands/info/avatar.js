const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    let user = inter.options.getUser(`persoon`)

    let avatar = new Discord.MessageEmbed()
    .setTitle(`Avatar van ${user.username}`)
    .setColor(`${client.ui.color}`)
    .setTimestamp()
    .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
    .setFooter({ text: `${client.ui.footer}` })

inter.reply({ embeds: [avatar] })
    
}


module.exports.help = {
    name: 'avatar'
}