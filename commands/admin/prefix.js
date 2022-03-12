const Discord = require("discord.js");
  const { def_prefix } = require("../../config.json");
  const configi = require('../../mongoose.js')
  exports.run =  async (bot, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id != "536596970236805143")
        return message.reply({embed:{title:":rex: You're not cool enough to use this command :notcool:", color:'ff0000'}}).catch(e => {});
 
      if (!args[0]) {
        return message.channel
          .send({
            embed: {
              title:
                ":rex: Ok, this command is for changing prefix. So obviously you need to specify a prefix right? :thonking:",
              color: "#FF0000"
            }
          }).catch(e => {});
      }
      if (args[1]) {
        return message.channel
          .send({
            embed: {
              title:
                ":rex: Nice. The prefix can only be one word or symbol",
              color: "#FF0000"
            }
          }).catch(e => {});
      }
      if (args[0].length > 3) {
        return message.channel
          .send({
            embed: {
              title:
                ":rex: You want a prefix more than 3 characers :thonking:",
              description: "I wouldn't suggest it",
              color: "#FF0000"
            }
          }).catch(e => {});
      }
 
      configi.updateOne({gid: message.guild.id}, {$set: {prefix: args[0]}})
      await message.channel
        .send({
          embed: {
            title: ":gtick: Prefix Set!",
            color: "#00FF00",
            description: `Prefix for ${message.guild.name} has been set to \`${
              args[0]
            }\``
          }
        }).catch(e => {});
        const newPrefix = args[0]
        configi.updateOne({gid: message.guild.id}, {$set: {prefix: newPrefix}})
        configi.findOneAndUpdate({
          gid: message.guild.id  },
        {$set: {prefix: newPrefix}
        }, (err) => {
          if(err)console.error(err)
        }).catch(e => {});
    }
 
  exports.help = {
    name: "prefix",
    description: "Changes the prefix for the current server",
    usage: "prefix [new_prefix]"
  };
 
  exports.conf = {
    aliases: [],
    cooldown: 5
  }
  
