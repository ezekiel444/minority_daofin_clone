import React from 'react'

export default function DetailPage() {
    return (
        <div>
           <div className="editBtn">Edit</div>
           <main>
               <div className="container-header">
                   <img src="#" alt="#" />
                   <h2>Title</h2>
               </div>
               <div className="container-description-links">
                   <div>Description</div>
                   <div className="links-total">
                       <div>links</div>
                       <div>total value</div>
                   </div>
               </div>
               <h2>Token information</h2>
               <div className="token-details">
                   <div className="eachItem">
                       <p>test</p>
                       <h1>testing</h1>
                   </div>
               </div>
           </main>
        </div>
    )
}
