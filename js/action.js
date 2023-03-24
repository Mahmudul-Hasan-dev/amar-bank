//total step
//add event to button first
//add event listener to that btn
//get the value by id  for input/display field
//if it is input field then you can use .value to access the value
//if it is not input field then it is need to be access with .innerText
//convert the value/innertext to number for calculation
//calculate the value
//set the output value to display field
//empty the input field

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

    //empty input field
    inputField2.value = '';

    // console.log(withdrawAmountInt)
    if (isNaN(withdrawAmountInt)) {
        alert('please provide a valid number');
        return;
    }

    const withdrawTotal1 = document.getElementById('withdrawTotal');
    const withdrawTotalValue = withdrawTotal1.innerText;
    // console.log(withdrawTotalValue);
    const winthdrawTotalflt = parseFloat(withdrawTotalValue);


    const newbalance = document.getElementById('balance-total');
    const newbalanceValue = newbalance.innerText;
    const newbalanceValueFlt = parseFloat(newbalanceValue);


    //validation
    if (withdrawAmountInt > newbalanceValueFlt) {
        alert('not enough money');
        // inputField2.value = '';
        return;
    }
    //add total of converted number
    const newTotal2 = withdrawAmountInt + winthdrawTotalflt;
    // console.log(newTotal2);
    withdrawTotal1.innerText = newTotal2;

    //everything after condition should be written after condition
    const newbalance2 = newbalanceValueFlt - withdrawAmountInt;
    newbalance.innerText = newbalance2;
})

