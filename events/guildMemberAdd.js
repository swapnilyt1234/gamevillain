const db = require("quick.db");
const Discord = require("discord.js");
module.exports = async (client, member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let embed = new Discord.MessageEmbed()
    .setTitle("WELCOME")
    .setDescription(
      `Welcome to our server ${member.user.tag}. Hope you enjoy here an don't forget to read rules`
    )
    .setColor("#FF2D00")
    .setTimestamp()
    .setImage(member.user.displayAvatarURL({ dynamic: true }));

  client.channels.cache.get(chx).send(embed);
};
