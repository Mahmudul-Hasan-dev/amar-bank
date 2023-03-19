document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputField = document.getElementById('deposit-amount');
    const depositAmount = inputField.value;
    const depositAmountInt = parseInt(depositAmount);


    const depositTotal = document.getElementById('depositTotal');
    const depositTotalValue = depositTotal.innerText;
    // console.log(depositTotal)
    const depositTotalValueInt = parseInt(depositTotalValue);
    const newTotal = depositAmountInt + depositTotalValueInt;
    // console.log(newTotal);
    depositTotal.innerText = newTotal;
    inputField.value = '';
})

// withdraw function
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputField2 = document.getElementById('withdraw-amount');
    const withdrawAmount = inputField2.value;
    const withdrawAmountInt = parseInt(withdrawAmount);
    console.log(withdrawAmountInt)

    const withdrawTotal1 = document.getElementById('withdrawTotal');
    const withdrawTotalValue = withdrawTotal1.innerText;
    const withdrawTotalValueInt = parseInt(withdrawTotalValue);
    // console.log(withdrawTotalValueInt);
    const newTotal2 = withdrawAmountInt + withdrawTotalValueInt;
    // console.log(newTotal);
    withdrawTotal1.innerText = newTotal2;
})