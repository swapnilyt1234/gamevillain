const poss = ["1", "2", "3", "4", "5", "6"];
exports.run = async (client, message, args) => {
    const rolled = poss[Math.floor(Math.random() * poss.length)]
    message.channel.send({embed:{title:"Rolled", description:`**${rolled}** 🎲`}})
};

exports.help = {
  name: "dice",
  description: "Rolls a dice",
  usage: "dice"
};

exports.conf = {
  aliases: ["roll"],
  cooldown: 1
};
