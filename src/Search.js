import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import {fetchWords} from './store'


const Search = props => {
  // const {offset, setOffset} = useState(0);
  const {getWords} = props
  
  const [word, setWord] = useState(0)
  
  // const useEffect(
  //   () => {
  //     getWords()
  //   },
  //   []
  // )
    
  const handleClick = event => {
    event.preventDefault()
    axios.get ('https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=827260dc-41b6-455f-8e8d-b6665e88e61e')
    .then (data => {
      const wordsFromAPI = data.data.items[0]
      const wordInfo = {
        id: data.id,
        shortDef: data.shortdef,
        type: data.fl, 
        sseq: data.sseq
      }
    })
  }
  
  const handleSearch = event => {
    setWord(event.target.value)
  }
    
  return(
    <div className="container"> 
    <input type="search" onChange={handleSearch} placeholder="Find words like..."></input>
       <button type='submit' onClick={handleClick}>Search</button>
    </div>
  )
}




// const mapState = state => {
//   return {
//     words: state.words
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     getWords: () => dispatch(fetchWords()),
//   }
// }

// export default connect(mapState, mapDispatch)(Search)
export default Search