document.getElementById('btn-deposit').addEventListener('click', function () {
    //get the amount from input field
    const inputField = document.getElementById('deposit-amount');
    const depositAmount = inputField.value;
    const depositAmountInt = parseFloat(depositAmount);

    //grab the display field value
    const depositTotal = document.getElementById('depositTotal');
    const depositTotalValue = depositTotal.innerText;
    // console.log(depositTotal)
    const depositTotalValueInt = parseFloat(depositTotalValue);
    const newTotal = depositAmountInt + depositTotalValueInt;
    // console.log(newTotal);
    depositTotal.innerText = newTotal;
    inputField.value = '';

    //total balance show

    const balance = document.getElementById("balance-total");
    const recentBalance = balance.innerText;
    const recentBalanceInt = parseFloat(recentBalance);
    const updateBalance = recentBalanceInt + depositAmountInt;
    balance.innerText = updateBalance;
})

// withdraw function
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputField2 = document.getElementById('withdraw-amount');
    const withdrawAmount = inputField2.value;
    const withdrawAmountInt = parseFloat(withdrawAmount);
    console.log(withdrawAmountInt)

    const withdrawTotal1 = document.getElementById('withdrawTotal');
    const withdrawTotalValue = withdrawTotal1.innerText;
    console.log(withdrawTotalValue);
    const winthdrawTotalflt = parseFloat(withdrawTotalValue);
    //add total of converted number
    const newTotal2 = withdrawAmountInt + winthdrawTotalflt;
    // console.log(newTotal2);
    withdrawTotal1.innerText = newTotal2;
    inputField2.value = '';

    const newbalance = document.getElementById('balance-total');
    const newbalanceValue = newbalance.innerText;
    const newbalanceValueFlt = parseFloat(newbalanceValue);
    const newbalance2 = newbalanceValueFlt - withdrawAmountInt;
    newbalance.innerText = newbalance2;
})

