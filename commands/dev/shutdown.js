let m = "";
exports.run = async(bot, message, args) => {
    await message.channel
      .send({embed:{title:"Are you sure you want to shutdown this bot?", color:'#FF0000'}})
      .then(msd => (m = msd));
    await m.react("719132543026331680");
    await m.react("719136364616089634");
    m.awaitReactions(
      (reaction, user) =>
        user.id == message.author.id &&
        (reaction._emoji.id== "719132543026331680" || reaction._emoji.id== "719136364616089634" ),
      { max: 1, time: 20000 }
    )
      .then(async collected => {
        if (collected.first().emoji.id == "719132543026331680") {
          await message.channel.send({embed:{title:"Shutting down the bot... Goodbye!", color:'#FF0000'}})
          await console.log("Bot has been shut down")
          bot.destroy();
        } else message.channel.send({embed:{title:"Aight, shutdown has been canceled.", color:'#00FF00'}});
      })
      .catch(() => {
        message.channel.send("Alright,shutdown has been canceled")
        })
}

exports.help = {
  name: "kill",
  description: "shutdown",
  usage: "?kill",
};

exports.conf = {
  aliases: ["shutdown"],
  cooldown: 5
};
