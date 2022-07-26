const Discord = require('discord.js');
const db = require("quick.db")


module.exports.run = async (client, inter) => {

    let user = inter.options.getUser(`persoon`)

    let userinfo = new Discord.MessageEmbed()
    .setTitle(`Gebruikers informatie van ${user.username}`)
    .addField("Gebruikersnaam", `\`${user.tag}\``)
    .addField("Discord ID", "\`"+user.id+"\`")
    .addField("Account aangemaakt", "\`"+user.createdAt+"\`")
    .setColor(`${client.ui.color}`)
    .setThumbnail(user.displayAvatarURL({dynamic: true}))  

inter.reply({ embeds: [userinfo] })
    
}


module.exports.help = {
    name: 'userinfo'
}