const { MessageEmbed } = require('discord.js');
const db = require('../../warnsystem.js')
exports.run = async(client, message, args) => {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
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
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(new MessageEmbed()
            .setDescription(`You have been warned for ${reason}`)
            .setColor("RED")
        )
        message.channel.send(new MessageEmbed()
            .setDescription(`Warned ${user} for ${reason}`).setColor('BLUE')
        )
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
