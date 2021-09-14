import React from 'react'
import { learndb } from './learndb'
import StyleContainer from './style_learn'


export default function Learn() {
    return (
        <StyleContainer>
            <h1>Resources</h1>
            <div className="cardSection">
            {learndb.map(({imgurl,ex_icon,external_link,paragraph,title})=>{
                return ( 
                        <div className="card">
                        <div className="img_container">
                        <img src={imgurl} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <p>{paragraph}</p>
                       <span> <a href={external_link} target="_blank" rel="noopener noreferrer">Learn more{ex_icon}</a></span>

                    </div>
                )
            })}
            </div>
        </StyleContainer>
    )
}
