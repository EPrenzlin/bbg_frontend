const token_api = "&token="

const token = `${token_api}${process.env.REACT_APP_API_KEY}`
const regex_token = token.replace(/['"]+/g, '') 

const base_api = "https://finnhub.io/api/v1/search?q="


export const searchSymbol = (query) => {
    return dispatch => {
    fetch(`${base_api}${query}${regex_token}`)
    .then(response => response.json())
    .then(data =>
        dispatch({type: "SEARCH_RESULT", data})
        )
    }
}

export const covidData = () => {
    return dispatch => {
        fetch(`https://finnhub.io/api/v1/covid19/us?token=c0bbs6f48v6to0roqolg`)
        .then (response => response.json())
        .then(data =>
            dispatch({type:"COVID", data}))
    }
}

// sort by cases 
// sort by deaths

export const sortAlphabetical = () => {
    return dispatch => {
        fetch(`https://finnhub.io/api/v1/covid19/us?token=c0bbs6f48v6to0roqolg`)
        .then (response => response.json())
        .then(data =>
            dispatch({type:"SORT_ALPHA", data}))
    }
}
