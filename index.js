const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, ContextMenuCommandAssertions, DiscordAPIError} = require(`discord.js`);

const prefix = "!";

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot está online!");

    client.user.setActivity("na Rede Ender!"), { type: "Patrulhando"}
})


client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];



//test command 

if (command === 'test'){
    message.channel.send('o pai ta on!')
}

if (command === 'coquinho'){
    message.channel.send('eh gay!')
}


//Contagem de Membros

if (cmd === `${prefix}membros`){
    message.channel.send(`**Membros do Servidor:** ${message.guild.memberCount}`)
}


//Embed Post

if (command === 'embed'){
       
     const embed = new Discord.EmbedBuilder() 
     .setColor('#702963')
     .setTitle(':white_check_mark: Embed Test Title')
     .setDescription('Embed disc')
     .setThumbnail('https://imgur.com/aEiLpBx.png')
     .setImage('https://imgur.com/aEiLpBx.png')
     .setTimestamp()
     .setFooter(`Embed created by: ${message.author.tag}`)

     message.channel.send({ embeds: [embed]})

}





})








client.login("MTA1NzE0NzIwNDA0Njk0NjMzNA.GkGSie.qkQoibYCLgQcYPwnxOfexcb6iH3TuPllHWRi-4");