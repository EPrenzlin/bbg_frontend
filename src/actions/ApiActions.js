const token = `${process.env.REACT_APP_KEY}`


const api_url = "https://finnhub.io/api/v1/search?q="

export const searchSymbol = (query) => {
    fetch(api_url +`${query}&token=${token}`)
    .then(response => response.json())
    .then(data => console.log(data));
}



