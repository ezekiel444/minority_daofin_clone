import React, { useEffect, useState } from 'react'
import CountBoard from './total_board/CountBoard'
import HomeContainer from "./StyleHome"
import {userDataContainerHeader} from '../../datastorage/userDataContainerHeader'
import { ImSphere, ImTwitter } from "react-icons/im";
import { BsFilter } from "react-icons/bs";
import {useQuery} from "@apollo/client";
import getDaofindData from '../apollo_files/QueryData';
import { Link } from 'react-router-dom';



export default function Home() {
    const {loading, error,data} = useQuery(getDaofindData)
    const [categoryFilter, setcategoryFilter] = useState([])
    const [dataInfo, setDataInfo] = useState([])


    useEffect(()=>{
        if(!loading && data){
            setDataInfo(data.daofinds)
              const extractCategoryValue = ["All", ...new Set(data.daofinds.map(data=>data.category))]
              setcategoryFilter(extractCategoryValue)
        }
    },[loading, data])


 const getTotal = ()=>{
     let totalResult = 0
  data.daofinds.filter(it=>(it.aum !=="N/A")).map(it=>totalResult +=Number(it.aum));
    return totalResult
 }



 const filterHandler = (item)=>{
    if(item ==="All"){
        return setDataInfo(data.daofinds)
    }
 let newSelectedItem = dataInfo.filter(eachItem=>{
    
     return eachItem.category === item
 })
  return setDataInfo(newSelectedItem)
 }

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error :(</p>;
  
    return (
        <HomeContainer>
          <div className="total_board">
          <CountBoard title="Number of DAOs" total_item={data.daofinds.length} />
           <CountBoard title="Total AUM (USD)" total_item={`$${getTotal()}`}/>
          </div>
           <div className="filter_section">
               <div className="filter_category">
                   {
                  
                  categoryFilter.map((data,idx)=>{
                   return (
                       <div key={idx}>
                          <button onClick={()=>filterHandler(data)}> {data}</button>
                       </div>
                   )
               })}
               </div>
               <div className="filter_btn"><button><BsFilter size={15}/>filter</button></div>
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


{dataInfo.map(item=>{
    const {aum,category,twl,img,id,foundDate,name} = item
    return (
       <Link to={`detail/${id}`}>
           <div className="item_container" key={id}> 
            
            <div className="nameImg">
            <img src={img} alt={name} />
            <h4>{name}</h4>
            </div>
        
            <h3>{category}</h3>
            <h3>${aum ? aum : "N/A"}</h3>
            <h3>{twl}</h3>
            <h3>{foundDate}</h3>
            <div className="logo_website">
                <ImTwitter size={30}/>
                <ImSphere size={30}/>
            </div>

        </div>
        </Link> 
    )
})}

        </HomeContainer>
    )
}
