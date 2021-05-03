const Discord = require("discord.js");
const db = require("quick.db");
const dateformat = require("dateformat");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  let prefix = db.get(`prefix.${message.guild.id}`);
  if (prefix == null) prefix = "?";

  let icon = client.user.displayAvatarURL({ size: 2048 });
  const embed = new Discord.MessageEmbed()
    .setColor("0ff0ff")
    .setTimestamp()
    .setThumbnail(icon)
    .addField("Developed by", "Swapnil, Pitzel")
    .addField("Total Servers", client.guilds.cache.size)
    .addField("Total Members", client.users.cache.size)
    .addField(
      "Invite me to your server",
      "[Invite](https://discord.com/api/oauth2/authorize?client_id=732189419880316949&permissions=8&scope=bot)"
    )
    .addField("Support Server",  "[Join](https://discord.gg/Er4gyWe)")
    .addField("Website", "[Visit](https://gamevillainbot.glitch.me)")
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
