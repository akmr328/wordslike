import { useState } from 'react';
import axios from 'axios'


const Search = props => {

  
  const [state, setState] = useState({headWord: ''})
  
    
  const handleClick = event => {
    event.preventDefault()
    axios.get (`https://dictionaryapi.com/api/v3/references/thesaurus/json/${state}?key=827260dc-41b6-455f-8e8d-b6665e88e61e`)
    .then (data => {
      const wordsFromAPI = data.data[0]
      const wordInfo = {
        id: wordsFromAPI.meta.id,
        type: wordsFromAPI.fl, 
        shortDef: wordsFromAPI.shortdef,
        syns: wordsFromAPI.meta.syns
      }
      console.log(wordsFromAPI, 'wordsFrom')
    })
  }
  
  const handleSearch = event => {
    setState(event.target.value)
  }
    
  return(
    <div className="container"> 
    <input type="search" onChange={handleSearch} placeholder="Find words like..."></input>
       <button type='submit' onClick={handleClick}>Search</button>
    </div>
  )
}



export default Search