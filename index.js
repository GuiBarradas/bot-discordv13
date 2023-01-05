const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, ContextMenuCommandAssertions, DiscordAPIError} = require(`discord.js`);

//Prefixo para identificar comandos
const prefix = "!";

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

//Colocar online e setar a atividade
client.on("ready", () => {
    console.log("Bot está online!");

    client.user.setActivity("no Servidor do Fulano!"), { type: "Jogando"}
})


client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];



//Comando de teste 

if (command === 'test'){
    message.channel.send('o pai ta on!')
}


//Comando para Contagem de Membros

if (cmd === `${prefix}membros`){
    message.channel.send(`**Membros do Servidor:** ${message.guild.memberCount}`)
}



})






client.login("aqui vc coloca o token do seu bot");
