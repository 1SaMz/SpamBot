const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "531248325366906900";//
var channel = "531248325366906902";//

    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**- SoM - SoM - SoM - SoM - SoM - SoM - S SoM - SoM - SoM - SoM - SoM - SoM-**')
    },305);
})

client.on('message',function(message) {
    let prefix = "!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(` ${args}`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});

client.login(process.env.BOT_TOKEN);
