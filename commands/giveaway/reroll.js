const Discord = require('discord.js')
const ms = require('ms');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to reroll giveaways.');
    }

    let messageID = args[0];
    if(!messageID){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    try {
        client.giveawaysManager.reroll(messageID);
        message.channel.send('Giveaway rerolled!');
    } catch (error) {
        if(error.startsWith(`No giveaway found with ID ${messageID}.`)){
            message.channel.send('Cannot find any giveaway with the given message ID: '+messageID);
        }
        if(err.startsWith(`Giveaway with message ID ${messageID} is not ended.`)){
            message.channel.send('This giveaway is not ended yet!');
        }
    }

};

exports.help = {
  name: "greroll",
  description: "Rerolls the winner of giveaway ",
  usage: "?greroll #message id "
  }

exports.conf = {
  aliases: [""],
  cooldown: 1
  }
