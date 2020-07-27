const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]);
      if(user)user = user.user
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.channel.send("Please mention the user or input the user ID.");
    if (user.bot || user === client.user) return message.channel.send("This user is a bot.");
    if (user.id === message.author.id || user === message.author) return message.channel.send("Why you want to transfer a credit to yourself?");

    let amount = parseInt(args[1]);
    if (!amount) return message.channel.send("Please input the amount that you wanna transfer");
    if (isNaN(amount)) return message.channel.send("Please input a valid number.");

    if (!balance || balance == 0) return message.channel.send("Your wallet is empty.");
    if (amount > balance) return message.channel.send("Sorry, You don't have enough credits to transfer");
    if (amount === 0) return message.channel.send("Plz enter the amount that you wanna pay. The minimum amount you can pay is 1  ");

    await db.add(`account.${user.id}.balance`, amount);
    await db.subtract(`account.${message.author.id}.balance`, amount);

    return message.channel.send(`Your credits have been transferred to your friends (${user.tag}) $${amount} credits!`);
}

exports.help = {
    name: "transfer",
    description: "Transfer a credits to the user.",
    usage: "transfer <@user | user ID> <amount>",
    example: "transfer @ray#1337 900"
}

exports.conf = {
    aliases: ["tf"],
    cooldown: 1
}