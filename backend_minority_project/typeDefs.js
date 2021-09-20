const {gql} = require("apollo-server-express")



const typeDefs = gql`

type UserInput{
    id: ID,
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
}

type Query{
    daofinds:[UserInput]
    daofind(id:ID):UserInput
}

input InputData{
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
}


type Mutation{
    addDaofind(
        post:InputData
        ):UserInput,



    editDaofind(
        id:String,
        post:InputData
        ):UserInput
}
`

module.exports = typeDefs