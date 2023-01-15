const { Client } = require("discord.js");
//A importação permite que você acesse as variáveis de ambiente do processo do nó em execução
require("dotenv").config();

const client = new Client();
//"process.env" acessa as variáveis de ambiente para o processo do nó em execução. PREFIX é a variável de ambiente que você definiu em seu arquivo .env
const prefix = process.env.PREFIX;


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", message =>{
    //Aqui estou usando um dos manipuladores de comandos básicos do An Idiot's Guide. Usando a variável de ambiente PREFIX acima, posso fazer o mesmo que o token do bot abaixo
    if(message.author.bot) return;
    if(message.content.indexOf(prefix.length) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split()(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "ping") {
        message.reply("pong!");
    }
});

// Aqui você pode acessar o bot. Ele tenta automaticamente fazer login no bot com a variável de ambiente que você definiu para o token do bot (seja "CLIENT_TOKEN" ou "DISCORD_TOKEN")

client.login('MTA2NDE5NjcxNDQ2NDAyNjcyNg.GS9cLz.uZd5G5n929AaE0f3w4zppDAMXK0yjba6QsNctg')

