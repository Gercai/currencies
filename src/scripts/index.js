import '../styles/main.scss';


const baseURL = "https://api.cryptonator.com/api/ticker/btc-usd";

fetch(baseURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let here = data;
  });