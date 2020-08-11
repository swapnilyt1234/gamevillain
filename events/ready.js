const Discord = require("discord.js");
const db = require("quick.db");

const mong = require('../mongoose.js');
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://swapnilyt:swapnilyt123@main.b8qz9.azure.mongodb.net/villain?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err)return console.error(err)
  console.log('Successfully connected to DB')
})


module.exports = async client => {
    let status = await db.fetch(`status`);
    if (!status || status == null) status = `with Users`;
    console.log("I am Ready to Go");
    client.user.setActivity(status);
    
      await client.guilds.cache.keyArray().forEach(id => {
mong.findOne({
  gid: id
}, (err, guild) => {
  if(err) console.log(err)
  if(!guild){
    const gd = client.guilds.cache.get(id)
    const newC = new mong({
      gid: id,
      gName: gd.name,
      prefix: "?",
      ownerID: gd.owner.user.id,
      ownerTag: gd.owner.user.tag,
      memberCount: gd.memberCount
    })
    return newC.save()
  }
})
  })
};
