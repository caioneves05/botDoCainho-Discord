const token = require('./token');
const { Client, Intents } = require('discord.js');

const client = new Client ({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

    client.login(token)

    .then(
    client.on('ready', () =>{
        console.log(`O ${client.user.tag} FOI LOGADO COM SUCESSO!`);
    }))

    .catch((err)=>{
        console.log(`Erro ao iniciar o bot: ${err.message}`);
    });

    client.on('ready', () =>{
        client.user.setStatus("dnd");
        client.user.setActivity("Bot do Cainho Está Online.")
    });

    client.on('messageCreate', (message) => {
        if(message.author.bot) return;

        if(message.content === 'ping'){
            message.channel.send(`O ping do bot é de estimados ${client.ws.ping}.`);
        }
    });
