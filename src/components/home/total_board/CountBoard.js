import React from 'react'
import CountContainer from './Style_count'


export default function CountBoard({title,total_item}) {
    return (
        <CountContainer>
           <h2>{title || "title"}</h2>
           <h1>${total_item.toLocaleString() || "0"}</h1>
        </CountContainer>
    )
}
