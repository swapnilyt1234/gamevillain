const Discord = require("discord.js");
const mong = require('../../mongoose.js')
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
    
if(message.guild.owner.id == user.user.id) {
      return message.channel.send("You jerk, how you can warn server owner -_-")
    }
    
    const reason = args.slice(1).join(" ")

  if(!reason) {
      return message.channel.send("Please provide reason to warn - warn @mention <reason>")
    }
      
       let warnings = await mong.findOne({
         mid: `${user.id}_${message.guild.id}`
       }, (err, mem) => {
        if(err)console.log(err)
        if(!mem){
           let news = new mong({
             mid: `${user.id}_${message.guild.id}`,
             warnings: null
           })
          news.save()
        }
       })
       
       if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    }
      
       if(warnings === null) {
      let news = new mong({
             mid: `${user.id}_${message.guild.id}`,
             warnings: 1
           })
          news.save()
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }
      else if(warnings !== null) {
        let news = new mong({
             mid: `${user.id}_${message.guild.id}`,
             warnings: 1
           })
          news.save()
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
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
