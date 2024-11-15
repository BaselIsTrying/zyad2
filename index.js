const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 

const {uptimeDate} = require("./uptime.js");
const Discord = require("discord.js");
const client = new Discord.Client({intents: 3276799});
let prefix = "-";
client.on("ready", () => {
     console.log(`${client.user.tag} is ready!!`)
})


client.on("messageCreate", async (message) => {
   if(!message.content || message.author.bot || !message.guild) return;
   let args = message.content.trim().split(/ +/)
   let cmd = args[0].slice(prefix.length).toLowerCase();
  switch(cmd) {
    case "uptime":
      message.reply(`- **Uptime Since:** <t:${Math.floor(uptimeDate / 1000)}:R>`)
      break;
  }
  
  
})

client.login(process.env.token)

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
//ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: process.env.guild, 
       selfMute: true,
       selfDeaf: true,
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 
//https://ra3dstudio.com CopyRight Codes
client.login(process.env.token);
