import React, { useState } from 'react'
import StyleSection from './styleAdd'

const initialState = {
    text:"",

}

export default function Add() {

    const [userData, setUserData] = useState(initialState)
    const getUserInput = ()=>{
    // setUserData([userData.])

    }
    return (
        <StyleSection>
         <h3>Add DAO Form</h3>
         <main>
             <form>   
             <div className="name">
             <label htmlFor="Full-name">Full name</label>   
              <input type="text" id="Full-name" value={userData.text} name="name" onChange={getUserInput} />
             </div>
              
             <div className="category">
              <label htmlFor="Category">Category</label> 
              <input type="text" id="Category" value={userData.text} name="category" onChange={getUserInput} />
              </div>

              <div className="date">
              <label htmlFor="Date-found"> Date Found</label>
              <input type="text" id="Date-found" value={userData.text} name="date" onChange={getUserInput}/>
              </div>

              <div className="token-symbol">
              <label htmlFor="Token-symbol">Token symbol </label>  
              <input type="text" id="Token-symbol" value={userData.text} name="token-symbol" onChange={getUserInput} />
              </div>

              <div className="token-name">
              <label htmlFor="Token-name">Governance Token Name</label>   
              <input type="text" id="Token-name" value={userData.text} name="token-name" onChange={getUserInput} />
              </div>

              <div className="twitter">
              <label htmlFor="Twitter">Twitter Handle </label> 
              <input type="text" id="Twitter" value={userData.text} name="twitter" onChange={getUserInput} />  
              </div>

              <div className="discord">
              <label htmlFor="Discord">Discord </label>   
              <input type="text" id="Discord" value={userData.text} name="discord" onChange={getUserInput} />
              </div>

              <div className="website">
              <label htmlFor="Website">Website</label>
              <input type="text" id="Websit" value={userData.text} name="website" onChange={getUserInput} />
              </div>

              <div className="tvl">
              <label htmlFor="TVL">TVL</label>
              <input type="text" id="TVL" value={userData.text} name="tvl" onChange={getUserInput} />
              </div>

              <div className="block-chain">
              <label htmlFor="Block-chain">Block-chain</label>
              <input type="text" id="Block-chain" value={userData.text} name="block-chain" onChange={getUserInput} />
              </div>

              <div className="head-quarter">
              <label htmlFor="Head-quarters">Head-quarters</label>
              <input type="text" id="Head-quarters" value={userData.text} name="head-quarter" onChange={getUserInput} />
              </div>

              <div className="description">
              <label htmlFor="Discription">Description</label>
              <input type="text" id="Description" placeholder="Brief Description" value={userData.text} name="description" onChange={getUserInput} />
              </div>
              <button id="Submit">Submit</button>

             </form>

         </main>
        </StyleSection>
    )
}
