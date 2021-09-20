import React, { useState } from 'react'

export default function SearchBar({data}) {
    const [inputText, setInputText] = useState('')
    const {daofinds} = data
   const searchData = daofinds.filter(data=>data.name.toLowerCase().includes(inputText.toLowerCase()))

   console.log(searchData);

    return (
        <div>
             <input type="text" placeholder="Search Dao" name="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />

        </div>
    )
}
