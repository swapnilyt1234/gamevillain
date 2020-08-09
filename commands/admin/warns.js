const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const user = message.mentions.members.first() || message.author
  
  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
  
  message.channel.send(`${user} have **${warnings}** warning(s)`)
}

exports.help = {
  name: "warnings",
  description: "Tell warnings of a user",
  usage: "?warnings <@user>",
  example: "?warnings @swapnil#0001"
};

exports.conf = {
  aliases: ["warnings"],
  cooldown: 5
};
