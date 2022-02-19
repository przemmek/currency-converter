let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let currencySumElement = document.querySelector(".js-currencySum");

plnElement.focus();

let valueEUR = 4.5256;
let valueUSD = 3.9798;
let valueGBP = 5.4222;
let valueNOK = 0.4463;
let valueJPY = 0.034561;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pln = +plnElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = pln / valueEUR;
            break;

        case "USD":
            result = pln / valueUSD;
            break;

        case "GBP":
            result = pln / valueGBP;
            break;

        case "NOK":
            result = pln / valueNOK;
            break;

        case "JPY":
            result = pln / valueJPY;
            break;


    }

    currencySumElement.innerText = `${result.toFixed(2)} ${currency}`;
})