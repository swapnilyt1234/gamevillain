const Discord = require('discord.js');
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
        client.giveawaysManager.edit(messageID, {
            setEndTimestamp: Date.now()
        });
        message.channel.send('Giveaway will end in less than '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    } catch (error) {
        if(error.startsWith(`No giveaway found with ID ${messageID}.`)){
            message.channel.send('Cannot find any giveaway with the message ID: '+messageID);
        }
        if(err.startsWith(`Giveaway with message ID ${messageID} is already ended.`)){
            message.channel.send('This giveaway is already ended!');
        }
    }

};

exports.help = {
  name: "gend",
  description: "Ends the giveaway ",
  usage: "?gend #message id "
  }

exports.conf = {
  aliases: [""],
  cooldown: 1
  }
