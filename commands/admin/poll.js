const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`; //Color Of Message Embed! USE CAPS | BLACK , YELLOW , PINK | RANDOM FOR RANDOM!

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(`Only Admins Can Use This Command!`)
  }
  let Channel = message.mentions.channels.first(); //You Need To Mention Channel Where You Want To Send Poll Message!
  let Description = args.slice(1).join(" ");

  let embed = new MessageEmbed()
    .setTitle(":astonished: New Poll! :astonished:")
    .setDescription(Description)
    .setColor(`${Color}`)
    .setFooter(`Created By : ${message.author.username}`)
    .setTimestamp();
  let Send = await Channel.send(embed); //Sending Message To Channel!

  await Send.react("👍");
  await Send.react("👎");
};

exports.help = {
    name: "poll"
}

exports.conf = {
    aliases: [""],
    cooldown: 1
}