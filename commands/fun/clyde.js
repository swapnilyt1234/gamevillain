const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('What do you want clyde to say?');
  let clydeMessage = args.slice(0).join(" ");
  let encodedLink = encodeURI("https://ctk-api.herokuapp.com/clyde/${clydeMessage}");
    const clydeEmbed = new MessageEmbed()
    .setTitle('Clyde!')
    .setImage(encodedLink);

  message.channel.send(clydeEmbed)
}




exports.help = {
  name: "clyde",
  description: "Send message through clyde",
  usage: "?clyde #text"
}

exports.conf = {
  aliases: [],
  cooldown: 1
}
