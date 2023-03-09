const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Uptime of the bot."),

    async execute(interaction, client) {
        const days = Math.floor(client.uptime / 86400000)
        const hours = Math.floor(client.uptime / 3600000) % 24
        const minutes = Math.floor(client.uptime / 600000) % 60
        const seconds = Math.floor(client.uptime / 1000) % 60

        const embed = new EmbedBuilder()
        .setTitle(`***${client.user.username}'s Uptime***`)
        .setColor("#fffffe")
        .setTimestamp()
        .addFields(
           { name: "Uptime", value: ` \`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes and \`${seconds}\` seconds.`}
        )

        interaction.reply({ embeds: [embed]})
    }
}
