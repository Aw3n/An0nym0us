const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: !lulz");
    console.log("Connecté");
});

bot.login("NDA1MzUwNTI5NDA1ODEyNzM2.DUjHsg.tpsEA5lkmjfYB3P7MixHIZ05s98");


bot.on('message', message => {
    if (message.content === prefix + "lulz"){
        message.channel.sendMessage("Liste des commandes: \n !irc \n !anonynews");
    }

    if (message.content === prefix + "irc"){
        message.reply("https://webchat.anonops.com/");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "anonynews"){
        message.reply("http://anonynews.go.tube/");
        console.log("Commande effectué");
    }
});
