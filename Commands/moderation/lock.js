const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("lock")
    .setDescription("Lock a given channel.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
    .addChannelOption(option =>
        option.setName("channel")
        .setDescription("The channel to lock.")
        .setRequired(false)
        )
    .addStringOption(option =>
        option.setName("reason")
        .setDescription("Reason for the lock.")
        ),

    async execute (interaction) {
        const { guild, channel, options } = interaction;

        const reason = options.getString("reason") || "No reason provided";

        channel.permissionOverwrites.create(interaction.guild.id, { SendMessages: false })

        const errEmbed = new EmbedBuilder()
        .setDescription(`The channel ***${channel}*** is already locked.`)
        .setColor("#FF0000")

        if (!channel.permissionsFor(guild.id).has("SendMessages"))
        return interaction.reply({
            embeds: [errEmbed],
            ephemeral: true
        })

        const embed = new EmbedBuilder()
        .setDescription(`The channel ***${channel}*** has been locked with reson ***${reason}***`)
        .setColor("#FFFFFE")

        await interaction.reply({ embeds: [embed] })
    }
}