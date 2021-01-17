const finnhub = require('finnhub');
 
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c0244h748v6vllnqnv6g"
const finnhubClient = new finnhub.DefaultApi()