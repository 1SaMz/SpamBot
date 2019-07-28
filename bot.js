const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require(`enmap`);
const farm = new Enmap();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "605117676741984261";//
var channel = "605117676741984261";//

    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**- خبرره  - # سبأآم ككريددتسس قمدأأن فشخ..-**')
    },800);
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
