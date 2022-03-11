const discord = require("discord.js")
const client = new discord.Client()
const idJokes = require('give-me-a-joke');

exports.run = async (client, message, args) => {
  let category = "blonde";
idJokes.todayJoke (category, function(joke) {
    message.channel.send(joke)
  });
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
