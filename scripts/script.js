var myHeader = document.querySelector("h1");
function date() {
    document.getElementById('theTime').innerHTML = Date();
}

myHeader.innerHTML = "What the date and time?";

const SPENDING_THRESHOLD = 200;

const TAX_RATE = 0.08;

const PHONE_PRICE = 99.99;

const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;

var amount = 0;

var quantity = parseInt(prompt("How much would you like to purchase?"));

function calculateTax(amt) {
    amt = amt + (amt * TAX_RATE);
    return amt;
}

function formatAmount(amt) {
    return "$" + amt.toFixed(2);
}

amount = calculateTax(amount) * quantity;

amount = quantity * (amount + PHONE_PRICE + ACCESSORY_PRICE);

console.log("Your total is " + formatAmount(amount) + ".");

if (amount < bank_balance) {
    console.log("Thank you for your purchase!");
} else {
    bank_balance = -(bank_balance - amount);
    
    console.log("You cannot afford this purchase. You are short on " + formatAmount(bank_balance) + ".");
}