 
const reducer = ( state= {results:[] }, action) => {

    switch (action.type) {
    case 'SEARCH_RESULT':
      return{
        ...state,
        results:[...state.results, action.data] 
      }
      default:
      return state
  }
} 
export default reducer 
