import React, { useState } from 'react'
import CountBoard from './total_board/CountBoard'
import HomeContainer from "./StyleHome"
import {db} from "../../datastorage/db"
import {userDataContainerHeader} from '../../datastorage/userDataContainerHeader'
import { ImSphere, ImTwitter } from "react-icons/im";

const extractCategoryValue = ["All", ...new Set(db.map(data=>data.category))]



export default function Home() {
 const [data,SetDb] = useState(db)
//  const [total_aum, setTotal] = useState(data)

 const getTotal = ()=>{
     let totalResult = 0

    data.filter(it=>(it.aum !=="N/A")).map(it=>{
        totalResult +=Number(it.aum)
    })
    return totalResult
 }



 const filterHandler = (item)=>{
    if(item ==="All"){
        return SetDb(db)
    }
 let newSelectedItem = db.filter(eachItem=>{
    
     return eachItem.category === item
 })
 SetDb(newSelectedItem)
 }

    return (
        <HomeContainer>
          <div className="total_board">
          <CountBoard title="Number of DAOs" total_item={data.length} />
           <CountBoard title="Total AUM (USD)" total_item={getTotal()}/>
          </div>
           <div className="filter_section">
               <div className="filter_category">
                   {extractCategoryValue.map((data,idx)=>{
                   return (
                       <div key={idx}>
                          <button onClick={()=>filterHandler(data)}> {data}</button>
                       </div>
                   )
               })}</div>
               <div className="filter_btn"><button>filter</button></div>
           </div>

        <hr />  
        <div className="item_header">
            {userDataContainerHeader.map((user,idx)=>{
                const {title, icon} = user

                return (
                    <div key={idx}>
                        {title}
                        <span>{icon}</span>
                    </div>
                )
            })}
        </div>
        <hr />

{data.map(data=>{
    const {aum,category,twl,img,id,foundDate,name} = data
    return (
        <div className="item_container" key={id}>
            
            <div className="nameImg">
            <img src={img} alt={name} />
            <h4>{name}</h4>
            </div>
        
            <h3>{category}</h3>
            <h3>${aum}</h3>
            <h3>{twl}</h3>
            <h3>{foundDate}</h3>
            <div>
                <ImTwitter/>
                <ImSphere/>
            </div>

        </div>
    )
})}

        </HomeContainer>
    )
}
