const { Random } = require("something-random-on-discord")
const random = new Random();

exports.run = async (client, message, args) => {
 let data = await random.getAdvice()
  message.channel.send(data)  
};

exports.help = {
  name: "advice",
  description: "Gives you an advice",
  usage: "advice"
};

exports.conf = {
  aliases: [],
  cooldown: 1
};
