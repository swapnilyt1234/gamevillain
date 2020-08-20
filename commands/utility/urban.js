const Discord = require('discord.js');
const urban = require('relevant-urban');

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('Please specify a word to search');

  let result = await urban(args[0]).catch((e) => {
    message.channel.send(
      'Unknown word phrase of **${args[0]}**, please try again later'
    )});

    const embed = new Discord.MessageEmbed()
      .setColor(0x7289da)
      .setTitle(result.word)
      .setURL(result.urbanURL)
      .setDescription(
        `**Defination:** \n**${result.defination}** \n\n**Example:** \n**${result.example}**`
      )
      .addField('Author', result.author, true)
      .addField(
        'Rating',
        `👍 ${result.thumbsUp.toLocaleString()} | 👎 ${result.thumbsDown.LocaleString()}`
      );
    if (result.tags.length > 0 && result.tags.join(' ').length < 1024) {
      embed.addField('Tags', result.tags.join(', '), true);
      embed.addField('Tags', result.tags.join(', '), true);
    }
    return message.channel.send(embed);
  }

exports.help = {
  name: 'urban',
  description: 'Give information about a particular word',
  usage: '?urban india',
};

exports.conf = {
  aliases: [],
  cooldown: 1,
};
