const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const Owner = client.config.owners;
  if (!Owner.includes(message.author.id))
    return message.channel.send(`Only Developers Can Use This Command!`);
  if (!args.length) {
    return message.channel.send("Please give status message");
  }
  let nst = args.join(" ");
  db.set(`status`, nst);
  await message.channel.send("Updated the bot status to" + `\`${nst}\``);
  client.user.setActivity(`${args.join(" ")}`);
};

exports.help = {
  name: "status",
  description: "Change the bot's status"
};

exports.conf = {
  aliases: [""],
  cooldown: 1
};
