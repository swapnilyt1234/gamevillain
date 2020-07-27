const Discord = require("discord.js")

exports.run = async(client, message, args) =>{
    if(!message.member.hasPermission('MANAGE_ROLES'))return message.channel.send("You don't have the permission to do that")
  
  let user = message.mentions.members.first()
  if(!user) return message.channel.send('User is missing')
  
  let role = message.mentions.roles.first()
  if(!role) return message.channel.send('Role is missing')
  
  message.channel.send(`Gave ${role} role to ${user}`)
  user.roles.add(role)
  }

exports.help = {
  name: "addrole",
  description: "Gives a role to specified user",
  usage: "?addrole"
  }

exports.conf = {
  aliases: ["addrole"],
  cooldown: 1
  }