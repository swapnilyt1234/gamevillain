const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    //<say Welcome! 
    // Welcome
    let botmessage = args.join(" ") // the defined message from ${prefix}s
    message.delete().catch(); // deletes the users message so its unknown who wsaid it
    message.channel.send(botmessage); //sends the defined message that got grabbed from ${prefix}say
}

exports.help = {
  name: "say",
  description: "repeats something that a user want bot to",
  usage: "?say (anything)",
  example: "?say hii"
}

exports.conf = {
  aliases: ["say"],
  cooldown: 5
}