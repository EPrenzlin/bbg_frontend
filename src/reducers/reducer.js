 
const reducer = ( state= {results:[] }, action) => {

    switch (action.type) {
    case 'SEARCH_RESULT':
      let newArray = [] 
      action.data.result.forEach(result => {
      // console.log(result)
      newArray.push(result)
      })
      // console.log("newArray", newArray)
      return{
        ...state,
        results: newArray
      }
      default:
      return state
  }
} 
export default reducer 
