import { useState } from 'react';
import axios from 'axios'


const Search = props => {

  
  const [words, setWords] = useState({headWord: '', type: '', shortDef: '', syns: []})
  
    
   const handleClick = event => {
   event.preventDefault()
   axios.get (`https://dictionaryapi.com/api/v3/references/thesaurus/json/${words}?key=827260dc-41b6-455f-8e8d-b6665e88e61e`)
    .then (data => {
      const wordsFromAPI = data.data[0]
      setWords({
        headWord: wordsFromAPI.meta.id,
        type: wordsFromAPI.fl, 
        shortDef: wordsFromAPI.shortdef[0],
        syns: wordsFromAPI.meta.syns[0]
      })
      console.log(data, 'dtaa')
    })
  }
  
  const handleSearch = event => {
    event.preventDefault()
    setWords(event.target.value)
  }
    
  return(
    <div className="container"> 
    <input type="search" name="search" onChange={handleSearch} placeholder="Find words like..."></input>
       <button type='submit' onClick={handleClick}>Search</button>
     <div className="result-container">
     <h2 className='headWord' name="headWord" >{words.headWord}</h2>
     <p>{words.type}</p>
     <p>{words.shortDef}</p>
     {/* <ul>
       {words.syns.map((syn) =>
       <div key={syn.id}>
         {syn.content.map((c) => (
           <li>{c.content}</li>
         ))}
       </div>
       )}
     </ul> */}
     <ul>
      <li>{words.syns}</li>
     </ul>
   </div>
    </div>
  )
}



export default Search