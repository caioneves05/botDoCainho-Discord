const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("thefato")
        .setDescription("A melhor playlist de fato."),

    async execute(interation) {
        //Respondendo a interação
        await interation.reply("https://open.spotify.com/playlist/50zVX5bBZVTL4YZ3kr40Od?si=ZfwEu9SoRiqasE84paEp2Q");
    }
}
