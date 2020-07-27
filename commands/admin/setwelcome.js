const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Welcome Channel is seted as ${channel}`)
  }

exports.help = {
  name: "setwelcome",
  description: "welcome command",
  usage: "?setwelcome #channel",
};

exports.conf = {
  aliases: ["welcome"],
  cooldown: 5
};