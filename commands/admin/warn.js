const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
     if(!user) {
      return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You can not warn yourself")
    }
    
if (message.guild.owner.id == message.author.id) {
      return message.channel.send("You jerk, how you can warn server owner -_-")
    }
    
    const reason = args.slice(1).join(" ")

  if(!reason) {
      return message.channel.send("Please provide reason to warn - warn @mention <reason>")
    }
}

exports.help = {
  name: "warn",
  description: "Warns a user",
  usage: "?warn <@user> #reason",
  example: "?warn @swapnil#0001 #reason"
};

exports.conf = {
  aliases: ["warn"],
  cooldown: 5
};
