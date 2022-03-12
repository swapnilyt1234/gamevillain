const Discord = require("discord.js");
const db = require('../../mongoose.js')
const dateformat = require("dateformat");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  let prefix = db.findOne(`prefix.${message.guild.id}`);
  if (prefix == null) prefix = "?";

  let icon = client.user.displayAvatarURL({ size: 2048 });
  const embed = new Discord.MessageEmbed()
    .setColor("0ff0ff")
    .setTimestamp()
    .setThumbnail(icon)
    .addField("Developed by", "Swapnil#7868, Pitzel#0001")
    .addField("Total Servers", client.guilds.cache.size)
    .addField("Total Members", client.users.cache.size)
    .addField(
      "Invite me to your server",
      "[Invite](https://ptb.discord.com/api/oauth2/authorize?client_id=951401422015057953&permissions=8&scope=bot)"
    )
    .addField("Support Server",  "[Join](https://discord.gg/G8aQWFU4Fb)")
    .addField("Website", "UNDER DEVELOPMENT")
    .addField("Prefix", "`" + prefix + "`");
   
  message.channel.send(embed);
};
exports.help = {
  name: "botinfo",
  description: "Gives info of the bot",
  usage: "?botinfo"
};

exports.conf = {
  aliases: [],
  cooldown: 1
};
