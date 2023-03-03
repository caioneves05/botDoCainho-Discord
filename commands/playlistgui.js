const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("guiplaylist")
        .setDescription("Playlist do cabeludinho tá?"),

    async execute(interation) {
        //Respondendo a interação
        await interation.reply("https://open.spotify.com/playlist/6lfxJYcroQaF5JXsUYB3PD?si=klPdm39-Tdud5auAugCbJA");
    }
}
