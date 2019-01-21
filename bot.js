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

        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "531248408699338781") return;
            if(msg.isMentioned(client.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }else return;
});


client.login(process.env.BOT_TOKEN);
