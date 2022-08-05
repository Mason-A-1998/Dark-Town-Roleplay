const client = require("../index").client
const { Client, Intents, DiscordAPIError, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');

// const levelFile = require("../Database/levels.json")

client.on('messageCreate', async message => {

    // RandomXP(message);

})

// function RandomXP(message) {

//     var randomXP = Math.floor(Math.random() * 15);

//     console.log(randomXP);

//     var idUser = message.author.id;

//     if (!levelFile[idUser]) {

//         levelFile[idUser] = {
//             xp: 0,
//             level: 0
//         }

//     }

//     levelFile[idUser].xp += randomXP;

//     var levelUser = levelFile[idUser].level;
//     var xpUser = levelFile[idUser].xp;
//     var nextLevelXP = levelUser * 300;

//     if (nextLevelXP == 0) nextLevelXP = 100;

//     if (xpUser >= nextLevelXP) {

//         levelFile[idUser].level += 1;

//         fs.writeFile("../Database/levels.json", JSON.stringify(levelFile)),
//             err => {
//                 if (err) return console.log("Er is iets fout gegaan bij het Level systeem!")
//             };

//         var embedLevel = new MessageEmbed()
//             .setColor(`${client.ui.color}`)
//             .setDescription(`***Nieuw level***`)
//             .addFields("Nieuw level:", levelFile[idUser].level.toString())

//         message.channel.send({ embeds: [embedLevel] })

//     }

// }