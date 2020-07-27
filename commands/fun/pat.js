const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();

exports.run = async (client, message, args) => {
  let data = await random.getAnimeImgURL("pat")
  message.channel.send(data)
  }

exports.help = {
  name: "pat",
  description: "Sends a random pat gif",
  usage: "?pat"
  }

exports.conf = {
  aliases: ["pat"],
  cooldown: 1
  }