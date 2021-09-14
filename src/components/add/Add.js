import React from 'react'
import StyleSection from './styleAdd'

export default function Add() {
    return (
        <StyleSection>
         <h3>Add DAO Form</h3>
         <main>
             <form>
                 <div className="form_group">
              <label htmlFor="Full-name">Full name</label>   
              <input type="text" id="Full-name" />
                 </div>
              <label htmlFor="Category">Category</label> 
              <input type="text" id="Category" />
              <label htmlFor="Date-found"> Date Found</label>
              <input type="text" id="Date-found" />
              <label htmlFor="Token-symbol">Token symbol </label>  
              <input type="text" id="Token-symbol" />
              <label htmlFor="Token-name">Governance Token Name</label>   
              <input type="text" id="Token-name" />
              <label htmlFor="Twitter">Twitter Handle </label> 
              <input type="text" id="Twitter" />  
              <label htmlFor="Discord">Discord </label>   
              <input type="text" id="Discord" />
              <label htmlFor="Website">Website</label>
              <input type="text" id="Websit" />
              <label htmlFor="TVL">TVL</label>
              <input type="text" id="TVL" />
              <label htmlFor="Block-chain">Block-chain</label>
              <input type="text" id="Block-chain" />
              <label htmlFor="Head-quarters">Head-quarters</label>
              <input type="text" id="Head-quarters" />
              <label htmlFor="Discription">Discription</label>
              <input type="text" id="Discription" placeholder="Brief Description" />
              <button id="Submit">Submit</button>

             </form>

         </main>
        </StyleSection>
    )
}
