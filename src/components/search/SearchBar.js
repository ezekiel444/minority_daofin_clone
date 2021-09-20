import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import StyleSearchResult from './StyleSearch';

export default function SearchBar({data}) {
    const [inputText, setInputText] = useState(null)
    const {daofinds} = data
   const searchData = daofinds.filter(data=>{
       if(!inputText) {
           return null
       }
      return data.name.toLowerCase().includes(inputText.toLowerCase())
   })

   return (
        <StyleSearchResult>
             <input type="text" placeholder="Search Dao" name="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
            <div className="searchResult">
               {searchData.map(search=>{
                   return <Link to={`/detail/${search.id}`}><p>{search.name}</p></Link>
               })}
            </div>
        </StyleSearchResult>
    )
}
