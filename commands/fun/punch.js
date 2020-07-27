const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();

exports.run = async (client, message, args) => {
  let data = await random.getAnimeImgURL("punch")
  message.channel.send(data)
  }

exports.help = {
  name: "punch",
  description: "sends a random punch gif",
  usage: "?punch"
  }

exports.conf = {
  aliases: ["punch"],
  cooldown: 1
  }