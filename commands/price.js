const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {


    
    var priceEmbed = new Discord.RichEmbed()
    .addField("Standaard discord bot pakket:", "Gratis")
    .addField("Medium discord bot pakket", "1,75 Euro")
    .setColor("#0100fe")
    .setFooter("© AviaTeun#3138")
    .addField("Soon", "Meer coming soon");
    return message.channel.send(priceEmbed)
}

module.exports.help = {
  name: "price"
}
