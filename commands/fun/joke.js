const discord = require("discord.js")
const client = new discord.Client()
const giveMeAJoke = require('discord-jokes');
const random = new Random();

exports.run = async (client, message, args) => {
  client.on("message", message => {
    if (message.content === "joke") {
        giveMeAJoke.getRandomDadJoke (function(joke) {
      message.channel.send(joke);
    });
    }
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
