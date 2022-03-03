function welcome() {
    console.log("Welcome to my currency converter project!");
}

welcome();

{
    const calculationResult = (pln, currency) => {
        const valueEUR = 4.5256;
        const valueUSD = 3.9798;
        const valueGBP = 5.4222;
        const valueNOK = 0.4463;
        const valueJPY = 0.034561;

        switch (currency) {
            case "EUR":
                return pln / valueEUR;

            case "USD":
                return pln / valueUSD;

            case "GBP":
                return pln / valueGBP;

            case "NOK":
                return pln / valueNOK;

            case "JPY":
                return pln / valueJPY;
        }
    };

    const updateResultText = (pln, result, currency) => {
        const currencySumElement = document.querySelector(".js-currencySum");

        currencySumElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const pln = +plnElement.value;
        const currency = currencyElement.value;

        const result = calculationResult(pln, currency);

        updateResultText(pln, result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
};