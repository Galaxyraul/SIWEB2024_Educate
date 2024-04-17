// Ledger JavaScript

function renewSubscription() {
    // Replace with your renew subscription logic
    alert('Subscription renewed!');
}

function setAutoPay() {
    // Replace with your set auto-pay logic
    alert('AutoPay enabled!');
}

function addCoins() {
    // Replace with your add coins logic
    alert('Coins added!');
}
// ...existing JavaScript functions...

let autoPayEnabled = false;

function toggleAutoPay() {
    autoPayEnabled = !autoPayEnabled;
    const autoPayBtn = document.getElementById('autoPayBtn');
    
    if (autoPayEnabled) {
        autoPayBtn.textContent = 'Cancel AutoPay';
        alert('AutoPay enabled!');
    } else {
        autoPayBtn.textContent = 'Enable AutoPay';
        alert('AutoPay cancelled!');
    }
}
