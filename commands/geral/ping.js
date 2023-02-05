const Discord = require("discord.js");
const client = require("../../index");

//Exportando o comando Ping.
module.exports = {
    name: "ping",
    description: "Vejam o ping do Bot.",
    //Indica que o comando será utilizado no chat.
    type: Discord.ApplicationCommandType.ChatInput,
    
    run: async(client, interaction) => {
        //Embed é a mensagem personalizada do Discord.
        let embed = new Discord.EmbedBuilder()
        .setDescription(`Olá ${interaction.user}, ping = ${client.ws.ping}`)
        .setColor("Purple");
        
        interaction.reply({ embeds: embed })
    }
}