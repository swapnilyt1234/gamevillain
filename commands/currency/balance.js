const Discord = require("discord.js");
const db = require("quick.db");
let user;
let devs = ["536596970236805143", "536596970236805143"];

exports.run = async (client, message, args) => {
  if (message.mentions.members.first()) {
    if (devs.includes(message.author.id)){
      user = message.mentions.members.first().user
    if (user.bot)
      return message.channel.send("Bots are broke. They don't have any money");
    if (!user)
      return message.channel.send(
        "Mention a valid user in this server to see their balance"
      );
  }} else {
    user = message.author;
  }
  let balance = db.get(`account.${user.id}.balance`);
  if (!balance) balance = 0;
  else balance = balance;

  const embed = new Discord.MessageEmbed()
    .setColor(0x7289da)
    .setTitle(`Balance of ${user.tag}`)
    .addField("Balance", `$${balance.toLocaleString()}`)
    .setThumbnail(user.displayAvatarURL({ size: 4096, dynamic: true }))
    .setTimestamp(new Date()); // Optional :)
  return message.channel.send(embed);
};

exports.help = {
  name: "balance",
  description: "Checking yours, or other members money.",
  usage: "?balance [@user | user ID]",
  example: "balance \nbalance @swapnil#0001"
};

exports.conf = {
  aliases: ["bal", "coin", "money", "credit"],
  cooldown: 5
};
