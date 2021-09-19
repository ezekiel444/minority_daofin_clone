// const gpl = require()



const resolvers = {
    Query:{
     daofinds:async(parent,args,{DaofindData})=>{
     return await DaofindData.find()
     },
     daofind:async(parent,args,{DaofindData})=>{
         const {id} = args
         return await DaofindData.findById({_id:id})
         
     }
    },
 
 Mutation:{
     addDaofind: async(parent,args, {DaofindData})=>{
     let createData =await new DaofindData({...args.post})
    return createData.save() 
     },
 
     editDaofind:async(parent, args, {DaofindData})=>{
         const {id} = args.id
         
       return await DaofindData.findOneAndUpdate(id, {...args.post},{new:true})
     }
     } 
 }
 
 
 
 module.exports = resolvers
 
 