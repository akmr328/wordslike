import axios from 'axios'



//ACTION CONSTANT
const SET_WORDS = 'SET_WORDS'

//ACTION COMPONENT
export const setWords = (words) => {
  return {
    type: SET_WORDS,
    words
  }
}

//THUNK
export const fetchWords = () => {
  return async (dispatch) => {
    try {
      const { data : words } = await axios.get('https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=827260dc-41b6-455f-8e8d-b6665e88e61e')
       //this creates a descriptive key
      dispatch(setWords(words))
    } catch (error){
      console.log(error)
    }
  }
}

//Inital State
const initialState = {
  all: []
}


//REDUCER

export default function reducer (state = initialState, action){
  switch (action.type) {
    case SET_WORDS:
      return {...state, all: action.words}
    default:
      return state
  }
};