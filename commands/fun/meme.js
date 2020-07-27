const fetch = require("node-fetch");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then(res => res.json())
    .then(async img => {
      const meme = new Discord.MessageEmbed()
        .setImage(img.url)
        .setURL(img.postLink)
        .setTitle(img.title)
        .setColor("RANDOM")
        .setFooter(message.author.tag);
      message.channel.send(meme);
    });
};

exports.help = {
  name: "meme",
  description: "Gives you a meme",
  usage: "?meme"
};

exports.conf = {
  aliases: ["mem"],
  cooldown: 2
};