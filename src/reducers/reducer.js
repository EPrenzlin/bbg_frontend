 
const reducer = ( state= {results:[], covid:[], news:[], quote:[] }, action) => {

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
    return {
      ...state, 
      covid: action.data
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
    let caseArray = action.data.sort((a,b) => (a.case < b.case) ? 1: -1 ) 
    return {
      ...state, 
      covid: caseArray
    }

    case "SORT_DEATHS": 
    console.log(action.data)
    let deathArray = action.data.sort((a,b) => (a.death < b.death) ? 1 : -1 ) 
    return {
      ...state, 
      covid: deathArray
    }

    case "SEARCH_NEWS":
      console.table(action.data)
      return{
        ...state, 
        results: action.data
      }

    case "GET_NEWS" : 
    return{
    ...state, 
    news:action.data
    }

    case "GET_QUOTE":
      return{
        ...state, 
        quote: action.data
      }

      default:
      return state
  }
} 
export default reducer 
