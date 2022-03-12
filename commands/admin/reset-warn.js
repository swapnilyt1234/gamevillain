const Discord = require("discord.js");
const db = require("../../warnsystem.js");

exports.run = async (client, message, args) => {
  
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(message.mentions.users.first().bot) {
      return message.channel.send("Bots don't have warnings")
    }
if(message.author.id === user.id) {
      return message.channel.send("You can not reset your own warnings!")
    }
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(`Cleared ${user.user.tag}'s warns`)
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
}

exports.help = {
  name: "rwarn",
  description: "Reset warnings of user",
  usage: "?rwarn @user",
  example: "?rwarn @swapnil#0001"
};

exports.conf = {
  aliases: ["rwarn"],
  cooldown: 5
};
