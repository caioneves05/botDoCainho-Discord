const Discord = require('discord.js')
const client = new Discord.Client();
require('dotenv').config();


//A instrução client.on é utilizada para verificar eventos.

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg =>{
    //msg.content verifica oque está escrito na mensagem.
    if(msg.content === "ping"){
        msg.reply("pong");
    };
});

client.login(process.env.CLIENT_TOKEN);
