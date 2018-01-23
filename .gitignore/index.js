const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.SetGame("An0nym0us, !!lulz");
    console.log("Le bot est bien connecté/The bot is well connected");
    })
    
bot.login("NDA1MzUwNTI5NDA1ODEyNzM2.DUjHsg.tpsEA5lkmjfYB3P7MixHIZ05s98");