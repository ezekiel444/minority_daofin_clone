const {gql} = require("apollo-server-express")



const typeDefs = gql`

type UserInput{
    id: ID,
    img: String,
    name: String,
    category: String,
    aum: String,
    twl: String,
    foundDate: String
}


type Query{
    daofinds:[UserInput]
    daofind(id:ID):UserInput
}

input InputData{
    img: String,
        name: String,
        category: String,
        aum: String,
        twl: String,
        foundDate: String
}


type Mutation{
    addDaofind(
        img: String,
        name: String,
        category: String,
        aum: String,
        twl: String,
        foundDate: String
        ):UserInput,



    editDaofind(
        id:String,
        post:InputData
        ):UserInput
}
`

module.exports = typeDefs