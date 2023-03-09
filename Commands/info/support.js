const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Toomy™ Support."),

    async execute(interaction, client) {

        const embed = new EmbedBuilder()
        .setTitle(`***Toomy™ Support***`)
        .setColor("#fffffe")
        .setTimestamp()
        .setDescription("Need some help join [Here](https://discord.gg/Sh7HMQj2P)")

        interaction.reply({ embeds: [embed]})
    }
}