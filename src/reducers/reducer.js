 
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

    case "SORT_ALPHA": 
    console.log(action.data)
    let sortedArray = action.data.sort((a,b) => (a.state < b.state) ? -1: 1 ) 
    return {
      ...state, 
      covid: sortedArray
    }

    case "SORT_CASES": 
    console.log(action.data)
    let caseArray = action.data.sort((a,b) => (a.case < b.case) ? -1: 1 ) 
    return {
      ...state, 
      covid: caseArray
    }
      default:
      return state
  }
} 
export default reducer 
