const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select-bot")

function convertValue(){
    const inputValue = document.querySelector(".input-currency").value


    const dolarToday = 5.25
    const euroToday = 5.70
    const libraToday = 6.68
    const bitcoinToday = 354464.94
    
    const currencyToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")





if (currencySelect.value == "dolar"){
    currencyValue.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputValue / dolarToday)
}

if (currencySelect.value == "euro"){
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(inputValue / euroToday)
}

if (currencySelect.value == "libra"){
    currencyValue.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputValue / libraToday)
}

if (currencySelect.value == "bitcoin"){
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "BTC"
    }).format(inputValue / bitcoinToday)
}

currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"
}).format(inputValue)
}

function changeSelect(){
    const currencyName = document.getElementById("currency-name")
    const imgCurrencyConv = document.querySelector(".currency-converted")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        imgCurrencyConv.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        imgCurrencyConv.src = "./assets/euro.png"
    }
   
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        imgCurrencyConv.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        imgCurrencyConv.src = "./assets/bitcoin.png"
    }
    
    convertValue()
}



currencySelect.addEventListener("change", changeSelect)
convertButton.addEventListener("click", convertValue)
 