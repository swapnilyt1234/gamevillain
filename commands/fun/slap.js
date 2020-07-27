const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();

exports.run = async (client, message, args) => {
  let data = await random.getAnimeImgURL("slap")
  message.channel.send(data)
  }

exports.help = {
  name: "slap",
  description: "Sends a random slap gif",
  usage: "?slap"
  }

exports.conf = {
  aliases: ["slap"],
  cooldown: 1
  }