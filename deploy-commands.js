const { REST, Routes } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

//Importação de comandos
const fs = require('node:fs');
const path = require('node:path');

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = [];

for(file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON())
}
//Instância Rest
const rest = new REST({version: "10"}).setToken(TOKEN);

//deploy

async function deployCommands() {
    try {
        console.log(`Resetando ${commands.length} comandos... `)

        //PUT
        const data = await rest.put(
            Routes.applicationCommands(CLIENT_ID, GUILD_ID),
            {body: commands},

            console.log('Comandos registrados com sucesso!')
        )
    } catch(error) {
        console.error();
    }
};

deployCommands()