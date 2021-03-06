import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { addDaofindItem } from './addDaofindQuey'
import StyleSection from './styleAdd'
import { inputData } from './userInputSchema'


export default function Add() {
    const [userData, setUserData] = useState(inputData)
    const [addDaofind] = useMutation(addDaofindItem)
    
    const getUserInput = (e)=>{
        let textInputValue = e.target.value
        let textInputName = e.target.name

    setUserData({...userData, [textInputName]:textInputValue})

    }

    const handleSumbitData = (e)=>{
        e.preventDefault()
        addDaofind({
            variables:{...userData}
        })
    }


    return (
        <StyleSection>
         <h3>Add DAO Form</h3>
         <main>
             <form onSubmit={(event)=>handleSumbitData(event)}>   
             <div className="name">
             <label htmlFor="Full-name">Full name</label>   
              <input type="text" id="Full-name" value={userData.name} name="name" onChange={(event)=>getUserInput(event)} />
             </div>
              
             <div className="category">
              <label htmlFor="Category">Category</label> 
              <input type="text" id="Category" value={userData.category} name="category" onChange={getUserInput} />
              </div>

              <div className="date">
              <label htmlFor="Date-found"> Date Found</label>
              <input type="text" id="Date-found" value={userData.foundDate} name="foundDate" onChange={getUserInput}/>
              </div>

              <div className="token-symbol">
              <label htmlFor="Token-symbol">Token symbol </label>  
              <input type="text" id="Token-symbol" value={userData.tokenSymbol} name="tokenSymbol" onChange={getUserInput} />
              </div>

              <div className="token-name">
              <label htmlFor="Token-name">Governance Token Name</label>   
              <input type="text" id="Token-name" value={userData.tokenName} name="tokenName" onChange={getUserInput} />
              </div>

              <div className="twitter">
              <label htmlFor="Twitter">Twitter Handle </label> 
              <input type="text" id="Twitter" value={userData.twitter} name="twitter" onChange={getUserInput} />  
              </div>

              <div className="discord">
              <label htmlFor="Discord">Discord </label>   
              <input type="text" id="Discord" value={userData.discord} name="discord" onChange={getUserInput} />
              </div>

              <div className="website">
              <label htmlFor="Website">Website</label>
              <input type="text" id="Websit" value={userData.website} name="website" onChange={getUserInput} />
              </div>

              <div className="tvl">
              <label htmlFor="TVL">TVL</label>
              <input type="text" id="TVL" value={userData.tvl} name="tvl" onChange={getUserInput} />
              </div>

              <div className="block-chain">
              <label htmlFor="Block-chain">Block-chain</label>
              <input type="text" id="Block-chain" value={userData.blockChain} name="blockChain" onChange={getUserInput} />
              </div>

              <div className="head-quarter">
              <label htmlFor="Head-quarters">Head-quarters</label>
              <input type="text" id="Head-quarters" value={userData.headQuarter} name="headQuarter" onChange={getUserInput} />
              </div>

              <div className="description">
              <label htmlFor="Discription">Description</label>
              <input type="text" id="Description" placeholder="Brief Description" value={userData.description} name="description" onChange={getUserInput} />
              </div>
              <button id="Submit">Submit</button>
             </form>

         </main>
        </StyleSection>
    )
}
