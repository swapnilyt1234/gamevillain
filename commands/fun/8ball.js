let choose;
const poss = ["No", "Yes", "Maybe", "I don't know", "Possible", "Damn sure", "Not ever idiot", "No chance", "Might be", "I don't wanna answer :rofl;"];
exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel
      .send({
        embed: {
          title: "Ask something",
          color: "ff0000"
        }
      })
      .catch(e => {});
  ball();
  function ball() {
    choose = poss[Math.floor(Math.random() * poss.length)];
    if (choose)
      return message.channel
        .send({
          embed: { title: choose, color: "RANDOM" }
        })
        .catch(e => {});
  }
  if (!choose) ball();
};

exports.help = {
  name: "8ball",
  description: "Ask me anything.",
  usage: "8ball <question>"
};

exports.conf = {
  aliases: [],
  cooldown: 1
};
