const Discord = require("discord.js");
const db = require("quick.db");

module.exports = async (client, message) => {
  client.on("ready", async () => {
    let status = await db.fetch(`status`);
    if (!status || status == null) status = `with Users`;
    console.log("I am Ready to Go");
    client.user.setActivity(status);
  });
};