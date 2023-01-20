require('dotenv').config();
const { Client, GatewayIntentBits, Partials} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [
        Partials.Message,
        Partials.GuildMember,
        Partials.Reaction,
        Partials.User,
        Partials.Channel,
    ],
});

client.on('ready', () =>{
    console.log(`Bot está rodando com sucesso!`);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content === 'ping'){
        message.channel.send(`O ping do bot é  de estimados ${client.ws.ping}ms.`);
    }
})

client.on('ready', () => {
    client.user.setStatus("dnd");
    client.user.setActivity("Bot do Cainho está ON.");
});

client.login(process.env.TOKEN);