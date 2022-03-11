const discord = require("discord.js")
const client = new discord.Client()
const idJokes = require('give-me-a-joke');
link = "https://v2.jokeapi.dev/joke/Any"

exports.run = async (client, message, args) => {
  axios.get(link).then(res => {
  message.channel.send({embeds:[{title:res.body.setup, description: res.body.delivery}]})
}) 

}

const embed = new Discord.MessageEmbed()
      .setTitle(joke.setup)
      .setDescription(joke.delivery)

message.channel.send(embed);

exports.help = {
  name: "joke",
  description: "Tells a random joke",
  usage: "?joke"
  }

exports.conf = {
  aliases: ["joke"],
  cooldown: 1
  } 
