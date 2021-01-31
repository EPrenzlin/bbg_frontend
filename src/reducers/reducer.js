 
const reducer = ( state= {results:[] }, action) => {

    switch (action.type) {
    case 'SEARCH_RESULT':
      return{
        ...state,
        results:[action.data.result] 
      }
      default:
      return state
  }
} 
export default reducer 
