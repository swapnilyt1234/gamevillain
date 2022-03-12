exports.run = async (client, message, args) => {
  message.channel.send({
    embed: {
      title: "Invite me!",
      description: `[Click here](https://discord.com/api/oauth2/authorize?client_id=951485159658631228&permissions=8&scope=bot)`,
      color: "00ff00"
    }
  });
};

exports.help = {
  name: "invite",
  description: "Invite me to your server",
  usage: "command_usage"
};

exports.conf = {
  aliases: ["inv"]
};
