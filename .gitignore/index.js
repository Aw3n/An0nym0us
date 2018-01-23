const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!!")

    bot.on("ready", function () {
        bot.user.SetGame("An0nym0us", "!!lulz");
        bot.user.setStatus("online");
        console.log("Le bot est bien connecté/The bot is well connected");
        console.log(bot.channels);
    
    bot.login("NDA1MzUwNTI5NDA1ODEyNzM2.DUjHsg.tpsEA5lkmjfYB3P7MixHIZ05s98");

    bot.on("message", message => {    
        if(message.content === "ping") {
        message.reply("pong");
        console.log('ping pong')
        }

        if (message.content === prefix + "lulz"){
            var help_embed = new Discord.RichEmbed()
                .SetColor('#40A497')
                .AddField("Commandes du bot", " -!!lulz : Affiche les commandes du bot")
                .SetFooter("We are Anonymous! We are Legion! We do not forgive! We do not forget! Expect us!")
        MessageChannel.SendEmbed(help_embed);
//MessageChannel.SendMessage("Les commandes du bot :\n -!!lulz Pour afficher les commandes");
        console.log("commande lulz demandée!");
    }
    });
