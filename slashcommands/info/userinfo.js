const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {

    let user = inter.options.getUser(`persoon`)

    let userinfo = new Discord.MessageEmbed()
    .setTitle(`Gebruikers informatie van ${user.username}`)
    .addFields("Gebruikersnaam", `\`${user.tag}\``)
    .addFields("Discord ID", "\`"+user.id+"\`")
    .addFields("Account aangemaakt", "\`"+user.createdAt+"\`")
    .setColor(`${client.ui.color}`)
    .setThumbnail(user.displayAvatarURL({dynamic: true}))  

inter.reply({ embeds: [userinfo] })
    
}


module.exports.help = {
    name: 'userinfo'
}