const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    gid: String,
    gName: String,
    prefix: String,
    ownerID: String,
    ownerTag: String,
    memberCount: String,
    mid: String,
    warns: String
})

module.exports = mongoose.model('villain', schema)
