const token = require('./token');
const Discord = require('discord.js');
const client = new Discord.Client({Intents: ["MessageContent"]});


const onlineBot = () => {
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
}

module.exports = onlineBot;