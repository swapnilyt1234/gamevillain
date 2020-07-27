const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send("Give a prefix!");
  if (args[0].length > 4)
    return message.channel.send(
      "You can't set a prefix more than 4 characters"
    );
  let n = args[0];
  db.set(`prefix.${message.guild.id}`, n);
  message.channel.send(`Prefix has been set to \`${args[0]}\``);
};

exports.help = {
  name: "prefix",
  description: "Changes the prefix for the current server",
  usage: "prefix [new_prefix]"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}