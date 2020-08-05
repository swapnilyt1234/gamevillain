const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    gid: String,
    gName: String,
    prefix: String,
    ownerID: String,
    ownerTag: String,
    memberCount: String
})

module.exports = mongoose.model('villain', schema)
