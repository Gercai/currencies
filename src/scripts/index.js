import '../styles/main.scss';

const baseURL = "https://api.cryptonator.com/api/ticker/btc-usd";

Promise.all([
  fetch("https://api.cryptonator.com/api/ticker/btc-eur").then(resp => resp.json()),
  fetch("https://api.cryptonator.com/api/ticker/btc-usd").then(resp => resp.json()),
  
]).then((response) => {
  console.log(response);   
    return response;
  })   
  .then((data) => {
   
    data.map(element => 
      {
        element.ticker.convert = []; 
        element.ticker.convert.push(element.ticker.base + element.ticker.target);
        element.ticker.convert.push(element.ticker.target + element.ticker.base);
        console.log(element.ticker.convert);
      });

    document.querySelector(".calculate").addEventListener("click",(event)=>{
    event.preventDefault();

    let transition = document.querySelector("#currencySelect").value +
    document.querySelector("#currencySelect-convert").value;
      
    data.forEach(element => {
      
      let sum1 =    document.querySelector("#currency").value;
 
      switch (transition){

        case element.ticker.convert[0]:{
          sum1 = sum1 / element.ticker.price;
          document.querySelector("#currency-convert").value = sum1;
          break;
       }
        case element.ticker.convert[1]:{
          sum1 = sum1 * element.ticker.price;
          document.querySelector("#currency-convert").value = sum1;
          break;
    
        }
    }
    })
   });
 })  
  .catch((error) => { 
      console.log(error);    
  });
 
  