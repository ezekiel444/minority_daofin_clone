
const {ApolloServer} = require("apollo-server-express")
require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const DaofindData = require("./mongoSchema")
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')


const createMyServer = async ()=>{
   try {
    mongoose.connect(process.env.DB_URL,()=>{
        console.log("connected to mongodb successfully");
    })
       const PORT = 4000
    const app = express()
    const server = new ApolloServer({typeDefs, resolvers, context:{DaofindData}})
     await server.start()
     server.applyMiddleware({app:app})
   app.listen(PORT,()=>console.log(`server runing successfully ${PORT}`))

   } catch (error) {
     console.error(error);
   }
}

createMyServer();

