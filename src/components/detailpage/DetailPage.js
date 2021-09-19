import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import StyleSection from "./StyleDetailPage"
import {findDaofindItem} from "./QueryAPage"



export default function DetailPage() {
    const {id} = useParams()
    const {loading, error, data} = useQuery(findDaofindItem, {variables:{id}})
  

if(loading)return <div>loading</div>
if(error)return <div>error</div>
const {
    name,
    img,
    description,
    tvl,
    website,
    twitter,
    discord,
    foundDate,
    blockChain,
    tokenSymbol,
    headQuarter
} = data.daofind




    return (
        <StyleSection>
           <div className="editBtn">Edit</div>
           <main>
               <div className="container-header">
                  <div className="image-container"> <img src={img} alt={name} /></div>
                   <h2>{name}</h2>
               </div>
               <div className="container-description-links">
                   <div className="description">
                       <h2>Description</h2>
                       {description}
                       </div>
                   <div className="links-total">
                       <div className="iconLinks">
                           <h3>Links</h3>
                           <div className="links">
                           <p>{website}</p>
                           <p>{discord}</p>
                           <p>{twitter}</p>
                           </div>
                       </div>
                       <div className="tvlstyle">
                           <h3>Total Value Locked (TVL)</h3>
                           <p>{tvl}</p>
                       </div>
                   </div>
               </div>
               <h2>Token information</h2>
               <div className="token-details">
                   <div className="eachItem">
                      <div>Symbol <p>{tokenSymbol}</p></div>
                      <div>Name <p>{name}</p></div>
                       <div>BlockChain<p>{blockChain}</p></div>
                      <div>HeadQuarter <p>{headQuarter}</p></div>
                       <div>FoundDate<p>{foundDate}</p></div>
                   </div>
               </div>
           </main>
        </StyleSection>
    )
}
