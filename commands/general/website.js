exports.run = async(client, message,args) => {
  message.channel.send({
    embed: {
      title: "Our Website",
      description: "UNDER DEVELOPMENT",
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
