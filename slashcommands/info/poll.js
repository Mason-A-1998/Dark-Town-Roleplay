const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

  run: async (client, interaction, message, args) => {
    const choice1 = interaction.options.getString("choix_1");
    const choice2 = interaction.options.getString("choix_2");
    const choice3 = interaction.options.getString("choix_3");
    const choice4 = interaction.options.getString("choix_4");
    const choice5 = interaction.options.getString("choix_5");
    const choice6 = interaction.options.getString("choix_6");
    const choice7 = interaction.options.getString("choix_7");
    const choice8 = interaction.options.getString("choix_8");
    const choice9 = interaction.options.getString("choix_9");
    const choice10 = interaction.options.getString("choix_10");
    const choice11 = interaction.options.getString("choix_11");
    const choice12 = interaction.options.getString("choix_12");
    const choice13 = interaction.options.getString("choix_13");
    const choice14 = interaction.options.getString("choix_14");
    const choice15 = interaction.options.getString("choix_15");
    const choice16 = interaction.options.getString("choix_16");
    const choice17 = interaction.options.getString("choix_17");
    const choice18 = interaction.options.getString("choix_18");
    const choice19 = interaction.options.getString("choix_19");
    const choice20 = interaction.options.getString("choix_20");
    const question = interaction.options.getString("question");

    if (!question)
      return interaction.reply({
        content: "Vous devez indiquer le titre et les choix ou non du sondage.",
      });

    let pollEmbed = new MessageEmbed().setColor("#000000");

    // AUCUN CHOIX //

    if (!choice1) {
      pollEmbed.setTitle(`📊 **${question}**`);
      interaction.channel
        .reply({
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("👍");
          m.react("👎");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // UN SEUL CHOIX //
    if (!choice2) {
      pollEmbed.setDescription(`1️⃣ ${choice1}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // DEUX CHOIX //
    if (!choice3) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // TROIS CHOIX //
    if (!choice4) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // QUATRE CHOIX //
    if (!choice5) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}
    4️⃣ ${choice4}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
          m.react("4️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // CINQ CHOIX //
    if (!choice6) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}
    4️⃣ ${choice4}
    5️⃣ ${choice5}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
          m.react("4️⃣");
          m.react("5️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // SIX CHOIX //
    if (!choice7) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}
    4️⃣ ${choice4}
    5️⃣ ${choice5}
    6️⃣ ${choice6}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
          m.react("4️⃣");
          m.react("5️⃣");
          m.react("6️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // SEPT CHOIX //
    if (!choice8) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}
    4️⃣ ${choice4}
    5️⃣ ${choice5}
    6️⃣ ${choice6}
    7️⃣ ${choice7}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
          m.react("4️⃣");
          m.react("5️⃣");
          m.react("6️⃣");
          m.react("7️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // HUIT CHOIX //
    if (!choice9) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}
    4️⃣ ${choice4}
    5️⃣ ${choice5}
    6️⃣ ${choice6}
    7️⃣ ${choice7}
    8️⃣ ${choice8}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
          m.react("4️⃣");
          m.react("5️⃣");
          m.react("6️⃣");
          m.react("7️⃣");
          m.react("8️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // NEUF CHOIX //
    if (!choice10) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}
    4️⃣ ${choice4}
    5️⃣ ${choice5}
    6️⃣ ${choice6}
    7️⃣ ${choice7}
    8️⃣ ${choice8}
    9️⃣ ${choice9}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
          m.react("4️⃣");
          m.react("5️⃣");
          m.react("6️⃣");
          m.react("7️⃣");
          m.react("8️⃣");
          m.react("9️⃣");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // DIX CHOIX //
    if (!choice11) {
      pollEmbed.setDescription(`1️⃣ ${choice1}
    2️⃣ ${choice2}
    3️⃣ ${choice3}
    4️⃣ ${choice4}
    5️⃣ ${choice5}
    6️⃣ ${choice6}
    7️⃣ ${choice7}
    8️⃣ ${choice8}
    9️⃣ ${choice9}
    🔟 ${choice10}`);
      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("1️⃣");
          m.react("2️⃣");
          m.react("3️⃣");
          m.react("4️⃣");
          m.react("5️⃣");
          m.react("6️⃣");
          m.react("7️⃣");
          m.react("8️⃣");
          m.react("9️⃣");
          m.react("🔟");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 11 CHOIX //
    if (!choice12) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 12 CHOIX //
    if (!choice13) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 13 CHOIX //
    if (!choice14) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 14 CHOIX //
    if (!choice15) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}
    🇳 ${choice14}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
          m.react("🇳");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 15 CHOIX //
    if (!choice16) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}
    🇳 ${choice14}
    🇴 ${choice15}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
          m.react("🇳");
          m.react("🇴");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 16 CHOIX //
    if (!choice17) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}
    🇳 ${choice14}
    🇴 ${choice15}
    🇵 ${choice16}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
          m.react("🇳");
          m.react("🇴");
          m.react("🇵");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 17 CHOIX //
    if (!choice18) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}
    🇳 ${choice14}
    🇴 ${choice15}
    🇵 ${choice16}
    🇶 ${choice17}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
          m.react("🇳");
          m.react("🇴");
          m.react("🇵");
          m.react("🇶");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 18 CHOIX //
    if (!choice19) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}
    🇳 ${choice14}
    🇴 ${choice15}
    🇵 ${choice16}
    🇶 ${choice17}
    🇷 ${choice18}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
          m.react("🇳");
          m.react("🇴");
          m.react("🇵");
          m.react("🇶");
          m.react("🇷");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 19 CHOIX //
    if (!choice20) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}
    🇳 ${choice14}
    🇴 ${choice15}
    🇵 ${choice16}
    🇶 ${choice17}
    🇷 ${choice18}
    🇸 ${choice19}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
          m.react("🇳");
          m.react("🇴");
          m.react("🇵");
          m.react("🇶");
          m.react("🇷");
          m.react("🇸");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }

    // 20 CHOIX //
    if (choice20) {
      pollEmbed.setDescription(`🇦 ${choice1}
    🇧 ${choice2}
    🇨 ${choice3}
    🇩 ${choice4}
    🇪 ${choice5}
    🇫 ${choice6}
    🇬 ${choice7}
    🇭 ${choice8}
    🇮 ${choice9}
    🇯 ${choice10}
    🇰 ${choice11}
    🇱 ${choice12}
    🇲 ${choice13}
    🇳 ${choice14}
    🇴 ${choice15}
    🇵 ${choice16}
    🇶 ${choice17}
    🇷 ${choice18}
    🇸 ${choice19}
    🇹 ${choice20}`);

      interaction.channel
        .send({
          content: `📊 **${question}**`,
          embeds: [pollEmbed],
        })
        .then((m) => {
          m.react("🇦");
          m.react("🇧");
          m.react("🇨");
          m.react("🇩");
          m.react("🇪");
          m.react("🇫");
          m.react("🇬");
          m.react("🇭");
          m.react("🇮");
          m.react("🇯");
          m.react("🇰");
          m.react("🇱");
          m.react("🇲");
          m.react("🇳");
          m.react("🇴");
          m.react("🇵");
          m.react("🇶");
          m.react("🇷");
          m.react("🇸");
          m.react("🇹");
        });
      return interaction.reply({
        content: "Sondage envoyé !",
        ephemeral: true,
      });
    }
  }

  // 🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹


//}
