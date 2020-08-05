let configi = require('../mongoose.js')
module.exports = (client, guild) => {
        const newC = new configi({
          gid: guild.id,
          gName: guild.name,
          prefix: def_prefix,
          ownerID: guild.owner.user.id,
          ownerTag: guild.owner.user.tag,
          memberCount: guild.memberCount
        })
        return newC.save()
      }
