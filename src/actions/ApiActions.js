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
        fetch(`https://finnhub.io/api/v1/covid19/us?token=${token}'`)
        .then (response => response.json())
        .then(data =>
            dispatch({type:"COVID", data}))
    }
}


export const sortAlphabetical = () => {
    return dispatch => {
        fetch(`https://finnhub.io/api/v1/covid19/us?${regex_token}`)
        .then (response => response.json())
        .then(data =>
            dispatch({type:"SORT_ALPHA", data}))
    }
}

export const sortCases = () => {
    return dispatch => {
        fetch(`https://finnhub.io/api/v1/covid19/us?${regex_token}`)
        .then (response => response.json())
        .then(data =>
            dispatch({type:"SORT_CASES", data}))
    }
}

export const sortDeaths = () => {
    return dispatch => {
        fetch(`https://finnhub.io/api/v1/covid19/us?token=${regex_token}`)
        .then (response => response.json())
        .then(data =>
            dispatch({type:"SORT_DEATHS", data}))
    }
}


export const searchNews = (query) => {
    return dispatch => {
    fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${query}${regex_token}`)
    .then(response => response.json())
    .then(data =>
        dispatch({type: "SEARCH_NEWS", data})
        )
    } 
} 

export const getNews = () => {
    return dispatch => {
        fetch(`https://finnhub.io/api/v1/news?category=general${regex_token}`)
        .then(response => response.json())
        .then(data =>
            dispatch({type: "GET_NEWS", data})
            )
        } 
}
