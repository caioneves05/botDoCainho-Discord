const Discord = require("discord.js");

//Importando as Intents(permissão do Bot).

const client = new Discord.Client({ 
    intents: [ 
        "Guilds", 
        "GuildMembers", 
        "MessageContent", 
        "GuildMessages" 
    ]
});

require('dotenv').config();

module.exports = client;

//Quando acontecer alguma interação do tipo ApplicationCommand com o bot. 
client.on('interactionCreate', (interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommand){
        
        //pega o nome do comando que o usuário está solicitando
        const cmd = client.slashCommands.get(interaction.commandName);
        
        //Retorna um erro se não existir esse comando.
        if (!cmd) return interaction.reply(`Error`);
  
        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
        
        //Executando o comando solicitado.
        cmd.run(client, interaction);
  
     }
});

//Quando o Bot estiver Online, ele executará essas instruções.

client.on('ready', () => {
    console.log(`${client.user.username} está Online.`);

    client.user.setActivity({ 
        name: 'Estudando sobre JavaScript e a Library Discord.js V14.',
        type: Discord.ActivityType.Streaming
    });
});

//Coleção que armazena os comandos do Bot.
client,slashCommands = new Discord.Collection();

require('./handler')(client);

client.login(process.env.TOKEN);


