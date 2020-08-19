const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      "Sorry but you don't have permission to mute a user"
    );
  }

  if (!args[0]) return message.channel.send(`please give me member!`);

  var mutee =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.guild.members.cache.find(
      r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
    ) ||
    message.guild.members.cache.find(
      ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()
    );
  if (!mutee) return message.channel.send("please give me valid member!");

  if (
    mutee.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0
  )
    return message.channel.send("Sorry But I Cannot unmute This User!");

  let reason = args.slice(1).join(" ");
  const userRoles = mutee.roles.cache
    .filter(r => r.id !== message.guild.id)
    .map(r => r.id);

  let muterole = message.guild.roles.cache.find(r => r.name === "Muted");


  try {
    mutee.roles.set([muterole.id]).then(() => {
      mutee.send(`You have been unmuted from ${message.guild.name} for : ${reason || "no reason!"}`).catch(() => null);
    });
  } catch {
    mutee.roles.remove([muterole.id]);
  }
  const sembed = new MessageEmbed()
    .setColor(`RED`)
    .setDescription(`${mutee.user.tag} has been unmuted for : ${reason || "no reason"} by : ${message.author.tag}`)
    .setTimestamp();
  message.channel.send(sembed);
};

exports.help = {
  name: "unmute"
};

exports.conf = {
  aliases: [],
  cooldown: 1
};
