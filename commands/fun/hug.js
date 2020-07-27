const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();

exports.run = async (client, message, args) => {
  let data = await random.getAnimeImgURL("hug")
  message.channel.send(data)
  }

exports.help = {
  name: "hug",
  description: "Sends a random hug gif",
  usage: "?hug"
  }

exports.conf = {
  aliases: ["hug"],
  cooldown: 1
  }