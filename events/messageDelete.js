const db = require("quick.db"); // v7.1.1

module.exports = async (client, message) => {
  if (message.partial) await message.fetch();

  if (!message.guild || message.channel.type === "dm") return;

  if (message.author.bot || message.author === client.user) return;

  db.set(`snipe.${message.guild.id}.content`, message.content);

  db.set(`snipe.${message.guild.id}.user`, message.author.tag);

  db.set(`snipe.${message.guild.id}.channel`, message.channel.id);

  setTimeout(function() {
    db.delete(`snipe.${message.guild.id}`);
  }, 60000); //
};
