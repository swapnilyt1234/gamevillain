exports.run = async(client, message,args) => {
  message.channel.send({
    embed: {
      title: "Our Website",
      description: `[Click Here](https://gamevillainbot.glitch.me/)`,
      color: "00ff00"
    }
    })
}

exports.help = {
  name: "website",
  description: "Sends our official website",
  usage: "?website"
  }

exports.conf = {
  aliases: [],
  cooldown: 1
  }
