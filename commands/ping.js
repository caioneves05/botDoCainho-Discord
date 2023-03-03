const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde 'pong'."),

    async execute(interation) {
        //Respondendo a interação
        await interation.reply("pong!");
    }
}
