const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS') || !message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.send("You don't have permission to use that command.");
} else {
     
        let member = message.mentions.members.first() ||
        message.guild.members.cache.get(args[0])
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`${member}, Kicked!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

exports.help = {
  name: "kick",
  description: "Kicks a user",
  usage: "?kick @user",
  example: "?kick @user"
}

exports.conf = {
  aliases: ["kick"],
  cooldown: 5
}