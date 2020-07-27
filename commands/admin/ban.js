const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      "You don't have permission to use that command."
    );
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send("I don't have the permission to ban a member");
  let bannedMember = message.mentions.members.first();
  if (!bannedMember) return message.channel.send("Mention someone");
  if (!args[1])
    return message.channel.send("You can't ban any user without a reason!");
  let reason = args.slice(1).join(" ");
  await bannedMember
    .ban({ reason: reason })
    .then(() => message.channel.send(`${bannedMember} has been banned`));
};

exports.help = {
  name: "ban",
  description: "Bans a user",
  usage: "?ban @user",
  example: "?ban @user"
};

exports.conf = {
  aliases: ["ban"],
  cooldown: 5
};
