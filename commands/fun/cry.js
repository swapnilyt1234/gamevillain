const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();

exports.run = async (client, message, args) => {
  let data = await random.getAnimeImgURL("cry")
  message.channel.send(data)
  }

exports.help = {
  name: "cry",
  description: "Sends a random cry gif",
  usage: "?cry"
  }

exports.conf = {
  aliases: ["cry"],
  cooldown: 1
  }