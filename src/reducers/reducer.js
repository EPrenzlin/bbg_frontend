 
const reducer = (state={results:[]}, action) => {

    switch (action.type) {
      
    case 'SEARCH_RESULT':
      return{
        ...state,
        results:[...state.resultsaction.results] 
      }
      default:
      return state
  }
} 
export default reducer 
