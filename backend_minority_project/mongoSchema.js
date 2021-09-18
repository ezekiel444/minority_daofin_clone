const mongoose = require("mongoose")

const Schema = mongoose.Schema

const DaofindSchema = new Schema({
    img: String,
    name: String,
    category: String,
    aum: String,
    twl: String,
    foundDate: String
})

const DaofindData = mongoose.model("daofind", DaofindSchema)

module.exports  = DaofindData