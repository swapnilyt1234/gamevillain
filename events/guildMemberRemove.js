  const db = require("quick.db");
  const Discord = require('discord.js')
module.exports = async (client, member) => {
    let chx1 = db.get(`leavechannel_${member.guild.id}`);

  if (chx1 === null) {
    return;
  }

  let wembed = new Discord.MessageEmbed()
    .setTitle("Goodbye")
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#ff2050")
    .setThumbnail(member.user.avatarURL())
    .setDescription(
      `${member.user.tag} We hope you enjoyed in our server. We wish that you will come back`
    );

  client.channels.cache.get(chx1).send(wembed);
}