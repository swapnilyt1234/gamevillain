const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES'))return message.channel.send("You don't have the permission to do that")
  
  let user = message.mentions.members.first()
  if(!user) return message.channel.send('User is missing')
  
  let role = message.mentions.roles.first()
  if(!role) return message.channel.send('Role is missing')
  
  message.channel.send(`Removed ${role} from ${user}`)
  user.roles.remove(role)
  }

exports.help = {
  name: "delrole",
  description: "Removes a role from user",
  usage: "?delrole"
  }

exports.conf = {
  aliases: ["delrole"],
  cooldown: 1
  }