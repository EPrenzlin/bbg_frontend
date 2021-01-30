import {token, meowth} from'../api_info'
// arrow functions for each action, using the Finhub API JS open library. 


export const searchSymbol = (query) => {
    fetch(`https://finnhub.io/api/v1/search?q=${query}&token=${token}`)
    .then(response => response.json())
    .then(data => console.log(data));
}



