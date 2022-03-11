const discord = require("discord.js")
const client = new discord.Client()
const axios = require("axios")

exports.run = async (client, message, args) => {
  axios.get("https://v2.jokeapi.dev/joke/Any").then(res => {
  message.channel.send({embeds:[{title:res.data.setup, description: res.data.delivery}]})
}) 

}

exports.help = {
  name: "joke",
  description: "Tells a random joke",
  usage: "?joke"
  }

exports.conf = {
  aliases: ["joke"],
  cooldown: 1
  } 
