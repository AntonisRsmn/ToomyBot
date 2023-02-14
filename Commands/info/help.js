const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Toomy's Commands"),

    async execute(interaction, client) {

        const embed = new EmbedBuilder()
        .setTitle(`__${client.user.username}'s Commands__`)
        .setColor("#fffffe")
        .setTimestamp()
        .addFields(
           { name: "Mod", value: "Coming Soon", inline: true},
           { name: "Utils/Fun", value: "/utime", inline: true},
           { name: "Support", value: "/support", inline: true}
        )

        interaction.reply({ embeds: [embed]})
    }
}