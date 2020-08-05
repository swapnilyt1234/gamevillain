let configi = require('../mongoose.js')
module.exports = (client, guild) => {
     configi.findOneAndDelete({
      gid: guild.id
    }, (err) => {
      if(err) console.log(err)
        })
};
