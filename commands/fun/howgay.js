const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let random = Math.floor(Math.random() * 100) + 1;
    message.channel.send(`${user.mention}` + " is " + random + "% gay.")
}

exports.help = {
  name: "howgay",
  description: "Tells how gay you are",
  usage: "?howgay"
  }

exports.conf = {
  aliases: [""],
  cooldown: 1
  }
