const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter)

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !lulz");
    bot.user.setStatus("online");
    console.log(`Connecté ${bot.user.tag}!`);
});

bot.login("NDA1MzUwNTI5NDA1ODEyNzM2.DUjHsg.tpsEA5lkmjfYB3P7MixHIZ05s98");


bot.on("message", message => {    
    const embed = new Discord.RichEmbed()
    .setTitle("AN0NYM0US")
    .setDescription("Commandes du bot", " -!lulz : Affiche les commandes du bot")
    .addField("Liste des commandes: \n !irc \n !anonynews \n !minds \n !oshack")
	.setFooter("We are Anonymous! We are Legion! We do not forgive! We do not forget! Expect us!")

    if(message.content === prefix + "lulz"){
            message.channel.send({embed});
            //message.channel.sendMessage("Liste des commandes: \n !irc \n !anonynews \n !minds \n !oshack");
            console.log("commande lulz demandée!");
	}

    if (message.content === prefix + "irc"){
        message.channel.sendMessage("https://webchat.anonops.com/");
        console.log("Commande irc effectué");
    }

    if (message.content === prefix + "anonynews"){
        message.channel.sendMessage("http://anonynews.go.tube/");
        console.log("Commande anonynews effectué");
	}
	
    if (message.content === prefix + "minds"){
        message.channel.sendMessage("http://minds.com/");
        console.log("Commande minds effectué");
	}
	
    if (message.content === prefix + "oshack"){
		message.channel.sendMessage("https://backbox.org/");
		message.channel.sendMessage("https://www.kali.org/");
		message.channel.sendMessage("https://www.parrotsec.org/"); 
		message.channel.sendMessage("https://dracos-linux.org/");
		message.channel.sendMessage("https://lionsec-linux.org/");
		message.channel.sendMessage("https://blackarch.org/");
		message.channel.sendMessage("http://bugtraq-team.com/");
        console.log("Commande oshack effectué");
    }
});
