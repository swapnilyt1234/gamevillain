const Discord = require("discord.js");
  const { def_prefix } = require("../../config.json");
  const configi = require('../../mongoose.js')
  module.run =  async (message, args, bot) => {
      if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id != "536596970236805143")
        return message.reply({embed:{title:"<a:rex:726364666661437502> You're not cool enough to use this command <:notcool:722873184122044437>", color:'ff0000'}}).catch(e => {});
      
      if (!args[0]) {
        return message.channel
          .send({
            embed: {
              title:
                "<a:rex:726364666661437502> Ok, this command is for changing prefix. So obviously you need to specify a prefix right? <:thonking:721624386934931466>",
              color: "#FF0000"
            }
          }).catch(e => {});
      }
      if (args[1]) {
        return message.channel
          .send({
            embed: {
              title:
                "<a:rex:726364666661437502> Nice. The prefix can only be one word or symbol",
              color: "#FF0000"
            }
          }).catch(e => {});
      }
      if (args[0].length > 3) {
        return message.channel
          .send({
            embed: {
              title:
                "<a:rex:726364666661437502> You want a prefix more than 3 characers <:thonking:721624386934931466>",
              description: "I wouldn't suggest it",
              color: "#FF0000"
            }
          }).catch(e => {});
      }
  
      configi.updateOne({gid: message.guild.id}, {$set: {prefix: args[0]}})
      await message.channel
        .send({
          embed: {
            title: "<a:gtick:726364668867641445> Prefix Set!",
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
