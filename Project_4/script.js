// Get DOM Elements 
const baseCurrency = document.getElementById('base-currency');
const targetCurrency = document.getElementById('target-currency');
const baseAmount = document.getElementById('base-ammount');
const targetAmount = document.getElementById('target-amount');
const exchangeRate = document.getElementById('xrate');
const flipbtn = document.getElementById('flip');

// Function to fetch exchange rates from API and update DOM 
function calculate() {
    // Get the currency codes for base and taret currencies
    const baseCode = baseCurrency.nodeValue;
    const targetCode = targetCurrency.value;
    // Execute fetch API
    fetch()
};

// Event Listeners
baseCurrency.addEventListener('change', calculate);
baseAmount.addEventListener('input', calculate);
targetCurrency.addEventListener('change', calculate);
targetAmount.addEventListener('change', calculate);



// Initial calculation
calculate();