import React from 'react'
import StyleSection from './styleAdd'

export default function Add() {
    return (
        <StyleSection>
         <h3>Add DAO Form</h3>
         <main>
             <form>   
             <div className="name">
             <label htmlFor="Full-name">Full name</label>   
              <input type="text" id="Full-name" />
             </div>
              
             <div className="category">
              <label htmlFor="Category">Category</label> 
              <input type="text" id="Category" />
              </div>

              <div className="date">
              <label htmlFor="Date-found"> Date Found</label>
              <input type="text" id="Date-found" />
              </div>

              <div className="token-symbol">
              <label htmlFor="Token-symbol">Token symbol </label>  
              <input type="text" id="Token-symbol" />
              </div>

              <div className="token-name">
              <label htmlFor="Token-name">Governance Token Name</label>   
              <input type="text" id="Token-name" />
              </div>

              <div className="twitter">
              <label htmlFor="Twitter">Twitter Handle </label> 
              <input type="text" id="Twitter" />  
              </div>

              <div className="discord">
              <label htmlFor="Discord">Discord </label>   
              <input type="text" id="Discord" />
              </div>

              <div className="website">
              <label htmlFor="Website">Website</label>
              <input type="text" id="Websit" />
              </div>

              <div className="tvl">
              <label htmlFor="TVL">TVL</label>
              <input type="text" id="TVL" />
              </div>

              <div className="block-chain">
              <label htmlFor="Block-chain">Block-chain</label>
              <input type="text" id="Block-chain" />
              </div>

              <div className="head-quarter">
              <label htmlFor="Head-quarters">Head-quarters</label>
              <input type="text" id="Head-quarters" />
              </div>

              <div className="description">
              <label htmlFor="Discription">Discription</label>
              <input type="text" id="Discription" placeholder="Brief Description" />
              </div>
              <button id="Submit">Submit</button>

             </form>

         </main>
        </StyleSection>
    )
}
