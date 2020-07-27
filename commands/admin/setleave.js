const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let channel = message.mentions.channels.first();

  if (!channel) {
    return message.channel.send("Please Mention the channel first");
  }

  db.set(`leavechannel_${message.guild.id}`, channel.id);

  message.channel.send(`Leave Channel is seted as ${channel}`);
};

exports.help = {
  name: "setleave",
  description: "Sets a custom leave channel",
  usage: "?setleave"
};

exports.conf = {
  aliases: ["leave"],
  cooldown: 1
};
