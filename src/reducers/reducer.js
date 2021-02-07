 
const reducer = ( state= {results:[], covid:[] }, action) => {

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
    case 'COVID': 
    let covidArray = []
    action.data.forEach(result => {
    covidArray.push(result)
    })
    return {
      ...state, 
      covid: covidArray
    }
      default:
      return state
  }
} 
export default reducer 
