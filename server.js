const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js");
const client = new tutorialBot();
require("./handler/module.js")(client);
require("./handler/Event.js")(client);
client.package = require("./package.json");
client.on("warn", console.warn);
client.on("error", console.error);
client.login(process.env.TOKEN).catch(console.error);

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: ":tada:"
    }
