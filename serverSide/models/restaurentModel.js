const mongoose = require('mongoose')

const restaurentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    rName:String,
    rCity:String,
    rAddress:String,
    rFile:String
})

module.exports = new mongoose.model('restaurents' , restaurentSchema)