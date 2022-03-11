const discord = require("discord.js")
const client = new discord.Client()
const giveMeAJoke = require('discord-jokes');

exports.run = async (client, message, args) => {
  giveMeAJoke.getRandomDadJoke ((joke) => {
    message.channel.send(joke);
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
