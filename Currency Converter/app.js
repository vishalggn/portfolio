const today = new Date().toISOString().split('T')[0];
const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${today}/v1/currencies`;

const btn = document.querySelector(".convert-button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const rateMsg = document.querySelector(".convertedrate");
const amount = document.querySelector(".amount input");

function populateSelect(select, defaultcurrency) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = `${currCode}`;
        newOption.value = currCode;
        if (currCode === defaultcurrency) {
            newOption.selected = "selected";
        }
        select.appendChild(newOption);
    }
}

populateSelect(fromCurrency, "USD");
populateSelect(toCurrency, "INR");

fromCurrency.addEventListener("change", (e) => updateFlag(e.target));
toCurrency.addEventListener("change", (e) => updateFlag(e.target));

function updateFlag(select) {
    let currCode = select.value;
    let countryCode = countryList[currCode];
    const newSourceLink = `https://flagsapi.com/${countryCode}/flat/64.png`;
    const img = select.previousElementSibling;
    img.src = newSourceLink;
}

const updateExchangeRate = async () => {
    let amtValue = amount.value;
    if (amtValue === "" || amtValue < 1) {
        amtValue = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`;
    try {
        const responseFromApi = await fetch(URL);
        if (!responseFromApi.ok) {
            throw new Error(`HTTP error! Status: ${responseFromApi.status}`);
        }
        const data = await responseFromApi.json();
        const rate = data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
        const finalAmt = amtValue * rate;

        rateMsg.innerText = `${amtValue} ${fromCurrency.value} = ${finalAmt} ${toCurrency.value}`;
    } catch (error) {
        console.error('Error fetching the exchange rate:', error);
        rateMsg.innerText = "Failed to fetch exchange rate. Please try again.";
    }
}

btn.addEventListener("click", updateExchangeRate);
