const Discord = require("discord.js");
const imageColor =
  "https://cdn.glitch.com/49cc8f32-6ceb-45be-a0d7-d990c2d0b841%2Fsonic.png?v=1594970334859";
const newImageColor =
  "https://cdn.glitch.com/49cc8f32-6ceb-45be-a0d7-d990c2d0b841%2FsonicNewColor.png?v=1594970333698";
var Jimp = require("jimp");

exports.run = (client, message, args) => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var hexColor = "0x" + Jimp.rgbaToInt(r, g, b, 0);
  var colorResult = r + ", " + g + ", " + b;

  Jimp.read(imageColor)
    .then(lenna => {
      return lenna
        .quality(60)
        .color([
          { apply: "red", params: [r] },
          { apply: "green", params: [g] },
          { apply: "blue", params: [b] }
        ])
        .write(newImageColor);
    })
    .catch(err => {
      console.error(err);
    });

  const embed = new Discord.MessageEmbed()
    .addField("Hex", `${hexColor}`)
    .addField("RGB", colorResult)
    .setColor(colorResult);

  message.channel.send({ embed });
};

exports.help = {
  name: "random",
  description: "generates a random colour",
  usage: "?random"
};

exports.conf = {
  aliases: ["rc"],
  cooldown: "1"
};
