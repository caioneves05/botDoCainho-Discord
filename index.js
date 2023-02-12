const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;



//Importação de comandos
const fs = require('node:fs');
const path = require('node:path');

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

client.commands = new Collection();

for(file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	
	if("data" in command && "execute" in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`Esse comando em ${filePath} está com data ou execute ausentes.`)
	}
}

// Log in Bot
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);

//Listener de interações com o bot
client.on(Events.InteractionCreate, async interation =>{
	if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "javascript"){
            await interaction.reply("Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        } 
		else if (selected == "python"){
            await interaction.reply("Documentação do Python: https://www.python.org")
        } 
		else if (selected == "csharp"){
            await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
        } 
		else if (selected == "discordjs"){
            await interaction.reply("Documentação do Discord.js: https://discordjs.guide/#before-you-begin")
        }
    }

	if(!interation.isChatInputCommand()) return;
 	
	const command = interation.client.commands.get(interation.commandName);
	
	if(!command){
		console.error(`Esse comando não existe`);
		return
	} 
	
	try{
		await command.execute(interation);
	} catch(error) {
		console.error();
		await interation.reply("Houve um erro ao executar esse comando")
	};
});  

