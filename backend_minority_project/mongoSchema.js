const mongoose = require("mongoose")

const Schema = mongoose.Schema

const DaofindSchema = new Schema({
    img:String,
    foundDate:String,
    twl:String,
    aum:String,
    name:String,
    category:String,
    tokenSymbol:String,
    tokenName:String,
    twitter:String,
    discord:String,
    website:String,
    tvl:String,
    blockChain:String,
    headQuarter:String,
    description:String
})

const DaofindData = mongoose.model("daofind", DaofindSchema)

module.exports  = DaofindData